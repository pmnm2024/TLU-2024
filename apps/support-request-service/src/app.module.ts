/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { RabbitMQModule } from "./rabbitmq/rabbitmq.module";
import { Module } from "@nestjs/common";
import { SupportRequestModule } from "./supportRequest/supportRequest.module";
import { SupportRequestTypeModule } from "./supportRequestType/supportRequestType.module";
import { SupportRequestDetailModule } from "./supportRequestDetail/supportRequestDetail.module";
import { OutBoxModule } from "./outBox/outBox.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from "./tasks/task.module";
@Module({
  controllers: [],
  imports: [
    RabbitMQModule,
    SupportRequestModule,
    SupportRequestTypeModule,
    SupportRequestDetailModule,
    OutBoxModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    ScheduleModule.forRoot(),
    TasksModule
  ],
  providers: [],
})
export class AppModule {}
