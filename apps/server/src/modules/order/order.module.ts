import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderEntity } from "src/entities";
import { OrderController } from "./controllers/order.controller";
import { OrderService } from "./providers/order.service";
import { RateModule } from "../rate/rate.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity]),
    forwardRef(() => RateModule),
  ],
  controllers: [
    OrderController,
  ],
  providers: [
    OrderService,
  ],
  exports: [
    OrderService,
  ]
})
export class OrderModule {}