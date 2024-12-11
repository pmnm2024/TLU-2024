import { Module } from "@nestjs/common";
import { FcmModuleBase } from "./base/fcm.module.base";
import { FcmService } from "./fcm.service";
import { FcmController } from "./fcm.controller";

@Module({
  imports: [FcmModuleBase],
  controllers: [FcmController],
  providers: [FcmService],
  exports: [FcmService],
})
export class FcmModule {}
