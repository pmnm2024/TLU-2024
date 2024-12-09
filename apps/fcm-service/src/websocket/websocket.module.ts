/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
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
