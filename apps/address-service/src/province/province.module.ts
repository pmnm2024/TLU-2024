import { Module } from "@nestjs/common";
import { ProvinceModuleBase } from "./base/province.module.base";
import { ProvinceService } from "./province.service";
import { ProvinceController } from "./province.controller";

@Module({
  imports: [ProvinceModuleBase],
  controllers: [ProvinceController],
  providers: [ProvinceService],
  exports: [ProvinceService],
})
export class ProvinceModule {}
