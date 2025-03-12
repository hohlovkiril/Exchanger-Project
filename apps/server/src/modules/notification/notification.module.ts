import { forwardRef, Module } from "@nestjs/common";
import { NotificationDashboardGateway } from "./gateways/dashboard.gateway";
import { AuthModule } from "../auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NotificationEntity } from "src/entities/notification.entity";
import { NotificationService } from "./providers/notification.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([NotificationEntity]),
    forwardRef(() => AuthModule),
  ],
  providers: [
    NotificationDashboardGateway,
    NotificationService,
  ]
})
export class NotificationModule {}