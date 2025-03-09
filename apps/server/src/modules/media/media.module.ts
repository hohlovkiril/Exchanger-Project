import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MediaEntity } from "src/entities";
import { MediaController } from "./controllers/media.controller";
import { MediaService } from "./providers/media.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([MediaEntity])
  ],
  controllers: [
    MediaController,
  ],
  providers: [
    MediaService,
  ],
  exports: [
    MediaService,
  ]
})
export class MediaModule {}