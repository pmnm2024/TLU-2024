import { Module } from "@nestjs/common";
import { WardModuleBase } from "./base/ward.module.base";
import { WardService } from "./ward.service";
import { WardController } from "./ward.controller";

@Module({
  imports: [WardModuleBase],
  controllers: [WardController],
  providers: [WardService],
  exports: [WardService],
})
export class WardModule {}
