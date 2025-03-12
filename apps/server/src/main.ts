import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { WsAdapter } from '@nestjs/platform-ws';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /** NestServer configuration */

  app.enableCors({
    origin: '*'
  })
  
  /** WebSocket configuration */

  // app.useWebSocketAdapter(new WsAdapter(app));

  /** Starting */

  await app.listen(3030);
}

bootstrap();