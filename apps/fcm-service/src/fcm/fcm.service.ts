/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
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

  async getByUser(id: string) {
    try {
      return this.prisma.fcm.findMany({
        where: {
          userId: id,
          // read: "false"
        }
      })
    } catch (error) {
      throw error
    }
  }
}
