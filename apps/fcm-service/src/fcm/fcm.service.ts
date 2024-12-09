import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FcmServiceBase } from "./base/fcm.service.base";

@Injectable()
export class FcmService extends FcmServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async findByUser(userId: string, status: string) {
    try {
      return await this.prisma.fcm.findMany({
        where: {
          userId: userId,
          read: status
        }
      })
    } catch (error) {
      throw error
    }
  }

  async updateStatus(id: string) {
    try {
      return await this.prisma.fcm.update({
        where: {
          id,
        },
        data: {
          read: 'true'
        }
      })
    } catch (error) {
      throw error
    }
  }
}
