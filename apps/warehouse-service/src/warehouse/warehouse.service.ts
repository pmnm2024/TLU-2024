/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WarehouseServiceBase } from "./base/warehouse.service.base";

@Injectable()
export class WarehouseService extends WarehouseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
  async handleWarehouse(data: any): Promise<void> {
    try {
      const { warehouse } = data;
      console.log(warehouse);
      if (!warehouse || !Array.isArray(warehouse)) {
        throw new Error("Invalid payload: 'warehouse' must be an array");
      }
      await this.prisma.$transaction(
        warehouse.map((update: { id: any; quantity: any; }) =>
          this.prisma.warehouse.update({
            where: { id: update.id }, 
            data: {
              quantity: {
                decrement: update.quantity,
              },
            },
          })
        )
      );
      console.log("Warehouse updated successfully");
    } catch (error) {
      console.error("Failed to update warehouse:", error);
      throw new Error("Failed to update warehouse");
    }
  }
  
}
