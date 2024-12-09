/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
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
