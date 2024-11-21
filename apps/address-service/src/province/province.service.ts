import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProvinceServiceBase } from "./base/province.service.base";

@Injectable()
export class ProvinceService extends ProvinceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
