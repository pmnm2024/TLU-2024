/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ReliefItem as PrismaReliefItem } from "@prisma/client";

export class ReliefItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ReliefItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.reliefItem.count(args);
  }

  async reliefItems(
    args: Prisma.ReliefItemFindManyArgs
  ): Promise<PrismaReliefItem[]> {
    return this.prisma.reliefItem.findMany(args);
  }
  async reliefItem(
    args: Prisma.ReliefItemFindUniqueArgs
  ): Promise<PrismaReliefItem | null> {
    return this.prisma.reliefItem.findUnique(args);
  }
  async createReliefItem(
    args: Prisma.ReliefItemCreateArgs
  ): Promise<PrismaReliefItem> {
    return this.prisma.reliefItem.create(args);
  }
  async updateReliefItem(
    args: Prisma.ReliefItemUpdateArgs
  ): Promise<PrismaReliefItem> {
    return this.prisma.reliefItem.update(args);
  }
  async deleteReliefItem(
    args: Prisma.ReliefItemDeleteArgs
  ): Promise<PrismaReliefItem> {
    return this.prisma.reliefItem.delete(args);
  }
}