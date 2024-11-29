"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseServiceBase = void 0;
class WarehouseServiceBase {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async count(args) {
        return this.prisma.warehouse.count(args);
    }
    async warehouses(args) {
        return this.prisma.warehouse.findMany(args);
    }
    async warehouse(args) {
        return this.prisma.warehouse.findUnique(args);
    }
    async createWarehouse(args) {
        return this.prisma.warehouse.create(args);
    }
    async updateWarehouse(args) {
        return this.prisma.warehouse.update(args);
    }
    async deleteWarehouse(args) {
        return this.prisma.warehouse.delete(args);
    }
}
exports.WarehouseServiceBase = WarehouseServiceBase;
//# sourceMappingURL=warehouse.service.base.js.map