/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Module } from "@nestjs/common";
import { FcmModuleBase } from "./base/fcm.module.base";
import { FcmService } from "./fcm.service";

@Module({
  imports: [FcmModuleBase],
  providers: [FcmService],
  exports: [FcmService],
})
export class FcmModule {}
