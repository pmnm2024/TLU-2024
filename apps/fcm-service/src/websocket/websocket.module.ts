import { Module } from '@nestjs/common';
import { NotificationsGateway } from './notifications.gateway';
import { WebsocketController } from './websocket.controller';
import { FcmModule } from 'src/fcm/fcm.module';


@Module({
    imports: [FcmModule],
    providers: [NotificationsGateway],
    controllers: [WebsocketController],
    exports: [NotificationsGateway],
})
export class WebsocketModule { }
