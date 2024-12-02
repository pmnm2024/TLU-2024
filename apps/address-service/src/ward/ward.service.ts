import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WardServiceBase } from "./base/ward.service.base";

@Injectable()
export class WardService extends WardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
