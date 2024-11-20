import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReliefItemServiceBase } from "./base/reliefItem.service.base";

@Injectable()
export class ReliefItemService extends ReliefItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
