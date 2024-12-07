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
