import { Module } from "@nestjs/common";
import { AdministrativeRegionModuleBase } from "./base/administrativeRegion.module.base";
import { AdministrativeRegionService } from "./administrativeRegion.service";
import { AdministrativeRegionController } from "./administrativeRegion.controller";

@Module({
  imports: [AdministrativeRegionModuleBase],
  controllers: [AdministrativeRegionController],
  providers: [AdministrativeRegionService],
  exports: [AdministrativeRegionService],
})
export class AdministrativeRegionModule {}
