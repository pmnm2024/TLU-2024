/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    try {
      await this.$runCommandRaw({
        createIndexes: "User", 
        indexes: [
          {
            key: { nowLocation: "2dsphere" }, 
            name: "nowLocation_2dsphere",    
          },
        ],
      });
    } catch (error) {
      console.error('Database command failed:', error);
    }
  }

}
