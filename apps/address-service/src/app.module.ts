import { Module } from "@nestjs/common";
import { AdministrativeRegionModule } from "./administrativeRegion/administrativeRegion.module";
import { AdministrativeUnitModule } from "./administrativeUnit/administrativeUnit.module";
import { ProvinceModule } from "./province/province.module";
import { DistrictModule } from "./district/district.module";
import { WardModule } from "./ward/ward.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  controllers: [],
  imports: [
    AdministrativeRegionModule,
    AdministrativeUnitModule,
    ProvinceModule,
    DistrictModule,
    WardModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [],
})
export class AppModule {}
