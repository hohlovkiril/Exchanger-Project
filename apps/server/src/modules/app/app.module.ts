import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import * as path from 'path';
import { DatabaseModule } from "../database/database.module";
import { UserModule } from "../user/user.modue";
import { CurrencyModule } from "../currency/currency.module";
import { MediaEntity } from "src/entities";
import { APP_GUARD } from "@nestjs/core";
import { AuthHttpGuard } from "src/guards/auth.http.guard";
import { JwtModule } from "@nestjs/jwt";
import { AuthModule } from "../auth/auth.module";
import { RateModule } from "../rate/rate.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: path.join(
        process.cwd(), '..', '..',  'env', process.env.NODE_MODE === 'production' ? '.env.production' : '.env.development'
      ),
    }),
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        global: true,
        secret: config.get<string>('JWT_SECRET'),
      })
    }),
    DatabaseModule,
    AuthModule,
    UserModule,
    MediaEntity,
    CurrencyModule,
    RateModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthHttpGuard,
    }
  ]
})
export class AppModule {}