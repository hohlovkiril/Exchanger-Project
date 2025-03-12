import { CanActivate, ExecutionContext, Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { WsException } from "@nestjs/websockets";
import { Observable } from "rxjs";
import { Permission, PERMISSION_KEY, PUBLIC_KEY, Role, ROLES_KEY } from "src/common";
import { AuthProvider } from "src/modules/auth/providers/auth.provider";

@Injectable()
export class AuthWsGuard implements CanActivate {

  private readonly logger: Logger = new Logger(AuthWsGuard.name);

  constructor(
    private readonly reflector: Reflector,
    private readonly authProvider: AuthProvider,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const client = context.switchToWs().getClient();

    const isPublic = this.reflector.getAllAndOverride<boolean>(PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const Roles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const Permissions = this.reflector.getAllAndOverride<Permission[]>(PERMISSION_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const token = client.handshake.headers.authorization;

    try {
      if (token) {
        client['user'] = await this.authProvider.validate(token);
      }
    } catch {}

    if (isPublic) {
      return true;
    }

    if (client['user'] === undefined) {
      throw new WsException('Unauthorized');
    }

    if (Roles && !Roles.includes(client['user'].role)) {
      throw new WsException('Unauthorized');
    }

    return true;
  }
}