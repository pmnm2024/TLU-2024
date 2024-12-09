/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Module } from "@nestjs/common";
import { OutboxModuleBase } from "./base/outbox.module.base";
import { OutboxService } from "./outbox.service";
import { OutboxController } from "./outbox.controller";

@Module({
  imports: [OutboxModuleBase],
  controllers: [OutboxController],
  providers: [OutboxService],
  exports: [OutboxService],
})
export class OutboxModule {}
