import { Injectable, Logger } from "@nestjs/common";
import { EventEmitter2, OnEvent } from "@nestjs/event-emitter";
import { InjectRepository } from "@nestjs/typeorm";
import { NotificationVariants } from "@shared/enums";
import { NotificationGetManyDto } from "src/dto";
import { NotificationEntity } from "src/entities/notification.entity";
import { NotificationCreateEvent, NotificationSendEvent } from "src/events";
import { Repository, SelectQueryBuilder } from "typeorm";

@Injectable()
export class NotificationService {

  private readonly logger: Logger = new Logger(NotificationService.name);

  constructor(
    @InjectRepository(NotificationEntity)
    private readonly repository: Repository<NotificationEntity>,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  private async createBuilder(): Promise<SelectQueryBuilder<NotificationEntity>> {
    return await this.repository.createQueryBuilder('notification');
  }

  public async getMany(payload: NotificationGetManyDto): Promise<NotificationEntity[]> {
    const query = await this.createBuilder();

    query.where('1 = 1');

    if (payload.clientId !== undefined) {
      query
        .andWhere('notification.clientId = :clientId', { clientId: payload.clientId })
        .orWhere('notification.clientId IS NULL');
    }

    query.orderBy('notification.id', 'DESC');

    return await query.getMany();
  }

  @OnEvent('notification.create')
  public async handlerCreateEvent(event: NotificationCreateEvent) {
    const newNotification = await this.repository.create();
    newNotification.text = event.text;

    if (event.clientId !== undefined) {
      newNotification.clientId = event.clientId;
    }

    if (event.variant !== undefined) {
      newNotification.variant = event.variant;
    }

    const notification = await this.repository.save(newNotification);
    const sendEvent = new NotificationSendEvent(notification);

    this.eventEmitter.emit('notification.send', sendEvent);
  }
}