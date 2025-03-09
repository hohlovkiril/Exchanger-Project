import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RateEntity } from "src/entities";
import { RateController } from "./controllers/rate.controller";
import { RateService } from "./providers/rate.service";
import { CurrencyModule } from "../currency/currency.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([RateEntity]),
    forwardRef(() => CurrencyModule),
  ],
  controllers: [
    RateController,
  ],
  providers: [
    RateService,
  ],
  exports: [
    RateService,
  ]
})
export class RateModule {}