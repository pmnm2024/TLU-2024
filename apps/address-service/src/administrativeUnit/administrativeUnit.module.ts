import { Module } from "@nestjs/common";
import { AdministrativeUnitModuleBase } from "./base/administrativeUnit.module.base";
import { AdministrativeUnitService } from "./administrativeUnit.service";
import { AdministrativeUnitController } from "./administrativeUnit.controller";

@Module({
  imports: [AdministrativeUnitModuleBase],
  controllers: [AdministrativeUnitController],
  providers: [AdministrativeUnitService],
  exports: [AdministrativeUnitService],
})
export class AdministrativeUnitModule {}
