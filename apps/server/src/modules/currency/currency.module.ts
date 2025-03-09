import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CurrencyEntity } from "src/entities";
import { CurrencyController } from "./controllers/currency.controller";
import { CurrencyService } from "./providers/currency.service";
import { MediaModule } from "../media/media.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([CurrencyEntity]),
    forwardRef(() => MediaModule),
  ],
  controllers: [
    CurrencyController,
  ],
  providers: [
    CurrencyService,
  ],
  exports: [
    CurrencyService,
  ]
})
export class CurrencyModule {}