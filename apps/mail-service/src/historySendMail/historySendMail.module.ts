import { Module } from "@nestjs/common";
import { HistorySendMailModuleBase } from "./base/historySendMail.module.base";
import { HistorySendMailService } from "./historySendMail.service";
import { HistorySendMailController } from "./historySendMail.controller";
import { MailModule } from "src/mail/mail.module";

@Module({
  imports: [HistorySendMailModuleBase],
  controllers: [HistorySendMailController],
  providers: [HistorySendMailService],
  exports: [HistorySendMailService],
})
export class HistorySendMailModule {}
