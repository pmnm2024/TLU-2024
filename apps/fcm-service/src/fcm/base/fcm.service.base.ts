/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Fcm as PrismaFcm } from "@prisma/client";

export class FcmServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.FcmCountArgs, "select">): Promise<number> {
    return this.prisma.fcm.count(args);
  }

  async fcms(args: Prisma.FcmFindManyArgs): Promise<PrismaFcm[]> {
    return this.prisma.fcm.findMany(args);
  }
  async fcm(args: Prisma.FcmFindUniqueArgs): Promise<PrismaFcm | null> {
    return this.prisma.fcm.findUnique(args);
  }
  async createFcm(args: Prisma.FcmCreateArgs): Promise<PrismaFcm> {
    return this.prisma.fcm.create(args);
  }
  async updateFcm(args: Prisma.FcmUpdateArgs): Promise<PrismaFcm> {
    return this.prisma.fcm.update(args);
  }
  async deleteFcm(args: Prisma.FcmDeleteArgs): Promise<PrismaFcm> {
    return this.prisma.fcm.delete(args);
  }
}