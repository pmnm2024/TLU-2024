/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Module } from "@nestjs/common";
import { SupportRequestTypeModuleBase } from "./base/supportRequestType.module.base";
import { SupportRequestTypeService } from "./supportRequestType.service";
import { SupportRequestTypeController } from "./supportRequestType.controller";

@Module({
  imports: [SupportRequestTypeModuleBase],
  controllers: [SupportRequestTypeController],
  providers: [SupportRequestTypeService],
  exports: [SupportRequestTypeService],
})
export class SupportRequestTypeModule {}
