import { Module } from "@nestjs/common";
import { DistrictModuleBase } from "./base/district.module.base";
import { DistrictService } from "./district.service";
import { DistrictController } from "./district.controller";

@Module({
  imports: [DistrictModuleBase],
  controllers: [DistrictController],
  providers: [DistrictService],
  exports: [DistrictService],
})
export class DistrictModule {}
