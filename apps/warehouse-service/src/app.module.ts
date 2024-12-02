import { RabbitMQModule } from "./rabbitmq/rabbitmq.module";
import { Module } from "@nestjs/common";
import { WarehouseModule } from "./warehouse/warehouse.module";
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
    WarehouseModule,
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
