import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HistorySupportServiceBase } from "./base/historySupport.service.base";

@Injectable()
export class HistorySupportService extends HistorySupportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
