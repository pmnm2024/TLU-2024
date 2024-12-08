import { Module } from "@nestjs/common";
import { FcmModuleBase } from "./base/fcm.module.base";
import { FcmService } from "./fcm.service";

@Module({
  imports: [FcmModuleBase],
  providers: [FcmService],
  exports: [FcmService],
})
export class FcmModule {}
