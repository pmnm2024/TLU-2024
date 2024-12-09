/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Module } from "@nestjs/common";
import { HistorySendMailModuleBase } from "./base/historySendMail.module.base";
import { HistorySendMailService } from "./historySendMail.service";
import { HistorySendMailController } from "./historySendMail.controller";
import { MailModule } from "src/mail/mail.module";

@Module({
  imports: [HistorySendMailModuleBase, MailModule],
  controllers: [HistorySendMailController],
  providers: [HistorySendMailService],
  exports: [HistorySendMailService],
})
export class HistorySendMailModule { }
