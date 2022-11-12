import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebsocketService } from './websocket/websocket.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, WebsocketService],
})
export class AppModule {}
