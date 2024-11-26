import { RabbitMQModule } from "./rabbitmq/rabbitmq.module";
import { Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import { redisStore } from "cache-manager-ioredis-yet";
import { NotificationModule } from "./notification/notification.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  controllers: [],
  imports: [
    RabbitMQModule,
    NotificationModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env', }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],

      useFactory: async (configService: ConfigService) => {
        const host = configService.get<string>('REDIS_HOST', 'redis');
        const port = configService.get<number>('REDIS_PORT', 6379);
        const ttl = configService.get<number>('REDIS_TTL', 5000);

        return {
          store: await redisStore({
            host: host,
            port: port,
            // username: username,
            // password: password,
            ttl: ttl,
          }),
        };
      },

      inject: [ConfigService],
    }),
  ],
  providers: [],
})
export class AppModule { }
