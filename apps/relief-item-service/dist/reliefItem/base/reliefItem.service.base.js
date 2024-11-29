"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReliefItemServiceBase = void 0;
class ReliefItemServiceBase {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async count(args) {
        return this.prisma.reliefItem.count(args);
    }
    async reliefItems(args) {
        return this.prisma.reliefItem.findMany(args);
    }
    async reliefItem(args) {
        return this.prisma.reliefItem.findUnique(args);
    }
    async createReliefItem(args) {
        return this.prisma.reliefItem.create(args);
    }
    async updateReliefItem(args) {
        return this.prisma.reliefItem.update(args);
    }
    async deleteReliefItem(args) {
        return this.prisma.reliefItem.delete(args);
    }
}
exports.ReliefItemServiceBase = ReliefItemServiceBase;
//# sourceMappingURL=reliefItem.service.base.js.map