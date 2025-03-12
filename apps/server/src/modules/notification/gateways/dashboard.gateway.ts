import { Logger, UnauthorizedException, UseGuards } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { NotificationSendEvent } from "src/events";
import { AuthWsGuard } from "src/guards/auth.ws.guard";
import { AuthProvider } from "src/modules/auth/providers/auth.provider";
import { NotificationService } from "../providers/notification.service";

@WebSocketGateway(8000, {
  cors: {
    origin: '*'
  },
  // path: '/notification/dashboard',
  // transports: ['websocket'],
})
export class NotificationDashboardGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  private readonly logger: Logger = new Logger(NotificationDashboardGateway.name);
  private clients: Map<number, Socket> = new Map();

  constructor(
    private readonly service: NotificationService,
    private readonly authProvider: AuthProvider,
  ) {}

  @WebSocketServer()
  server: Server;

  async afterInit(server: any) {
    this.logger.debug('Gateway started!');
  }

  @UseGuards(AuthWsGuard)
  async handleConnection(@ConnectedSocket() client: Socket, args: any) {
    const token = client.handshake.headers.authorization;
    
    try {
      if (!token) {
        this.logger.warn('no token')
        return client.disconnect(true);
      } else {
        const user = await this.authProvider.validate(token);
        client['user'] = user;
        this.clients.set(user.id, client);
      }
    } catch {
      throw new UnauthorizedException();
    }

    this.logger.log(`Client: ${client.id} connected!`);
  }

  async handleDisconnect(client: any) {
    this.logger.log(`Client: ${client.id} disconnected!`);
  }

  @SubscribeMessage('get.notifications')
  async handlerGetNotification(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any,
  ) {
    const notifications = await this.service.getMany({ clientId: client['user'].id })

    client.emit('notifications', { data: notifications });
  }

  @OnEvent('notification.send')
  async handlerSendEvent(event: NotificationSendEvent) {
    this.logger.log('New Notification send')
    if (event.notification.clientId !== null) {
      if (this.clients.has(event.notification.clientId)) {
        return this.clients.get(event.notification.clientId)?.send('newNotification', {
          ...event.notification,
          clientId: undefined,
        })
      }
    } else {
      this.clients.forEach((client) => {
        client.emit('newNotification', {
          ...event.notification
        })
      })
    }
  }
}