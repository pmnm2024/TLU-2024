import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DistrictServiceBase } from "./base/district.service.base";

@Injectable()
export class DistrictService extends DistrictServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
