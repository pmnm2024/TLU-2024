import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HistorySendMailServiceBase } from "./base/historySendMail.service.base";
import { MailService } from "src/mail/mail.service";

@Injectable()
export class HistorySendMailService extends HistorySendMailServiceBase {
  constructor(protected readonly prisma: PrismaService, protected readonly mailSerivce: MailService) {
    super(prisma);
  }

  async processSendMail(payload: any) {
    try {
      const { email, userId, description } = payload
      const sendMail = await this.mailSerivce.sendMail({ to: email, subject: "reset password", html: description })
      return sendMail;
    } catch (error) {
      throw error
    }
  }
}
