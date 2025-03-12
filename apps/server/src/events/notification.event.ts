import { NotificationVariants } from "@shared/enums";
import { NotificationEntity } from "src/entities/notification.entity";

export class NotificationCreateEvent {
  constructor(
    public readonly text: string,
    public readonly clientId?: number,
    public readonly variant?: NotificationVariants,
  ) {}
}

export class NotificationSendEvent {
  constructor(
    public readonly notification: NotificationEntity,
  ) {}
}