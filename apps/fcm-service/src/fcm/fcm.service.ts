import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FcmServiceBase } from "./base/fcm.service.base";

@Injectable()
export class FcmService extends FcmServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
