"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseControllerBase = void 0;
const common = __importStar(require("@nestjs/common"));
const swagger = __importStar(require("@nestjs/swagger"));
const prisma_util_1 = require("../../prisma.util");
const errors = __importStar(require("../../errors"));
const class_transformer_1 = require("class-transformer");
const api_nested_query_decorator_1 = require("../../decorators/api-nested-query.decorator");
const WarehouseCreateInput_1 = require("./WarehouseCreateInput");
const Warehouse_1 = require("./Warehouse");
const WarehouseFindManyArgs_1 = require("./WarehouseFindManyArgs");
const WarehouseWhereUniqueInput_1 = require("./WarehouseWhereUniqueInput");
const WarehouseUpdateInput_1 = require("./WarehouseUpdateInput");
class WarehouseControllerBase {
    service;
    constructor(service) {
        this.service = service;
    }
    async createWarehouse(data) {
        return await this.service.createWarehouse({
            data: data,
            select: {
                createdAt: true,
                id: true,
                name: true,
                quantity: true,
                supportRequestTypeId: true,
                supportRequestTypeName: true,
                unit: true,
                updatedAt: true,
            },
        });
    }
    async warehouses(request) {
        const args = (0, class_transformer_1.plainToClass)(WarehouseFindManyArgs_1.WarehouseFindManyArgs, request.query);
        return this.service.warehouses({
            ...args,
            select: {
                createdAt: true,
                id: true,
                name: true,
                quantity: true,
                supportRequestTypeId: true,
                supportRequestTypeName: true,
                unit: true,
                updatedAt: true,
            },
        });
    }
    async warehouse(params) {
        const result = await this.service.warehouse({
            where: params,
            select: {
                createdAt: true,
                id: true,
                name: true,
                quantity: true,
                supportRequestTypeId: true,
                supportRequestTypeName: true,
                unit: true,
                updatedAt: true,
            },
        });
        if (result === null) {
            throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
        }
        return result;
    }
    async updateWarehouse(params, data) {
        try {
            return await this.service.updateWarehouse({
                where: params,
                data: data,
                select: {
                    createdAt: true,
                    id: true,
                    name: true,
                    quantity: true,
                    supportRequestTypeId: true,
                    supportRequestTypeName: true,
                    unit: true,
                    updatedAt: true,
                },
            });
        }
        catch (error) {
            if ((0, prisma_util_1.isRecordNotFoundError)(error)) {
                throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
            }
            throw error;
        }
    }
    async deleteWarehouse(params) {
        try {
            return await this.service.deleteWarehouse({
                where: params,
                select: {
                    createdAt: true,
                    id: true,
                    name: true,
                    quantity: true,
                    supportRequestTypeId: true,
                    supportRequestTypeName: true,
                    unit: true,
                    updatedAt: true,
                },
            });
        }
        catch (error) {
            if ((0, prisma_util_1.isRecordNotFoundError)(error)) {
                throw new errors.NotFoundException(`No resource was found for ${JSON.stringify(params)}`);
            }
            throw error;
        }
    }
}
exports.WarehouseControllerBase = WarehouseControllerBase;
__decorate([
    common.Post(),
    swagger.ApiCreatedResponse({ type: Warehouse_1.Warehouse }),
    __param(0, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WarehouseCreateInput_1.WarehouseCreateInput]),
    __metadata("design:returntype", Promise)
], WarehouseControllerBase.prototype, "createWarehouse", null);
__decorate([
    common.Get(),
    swagger.ApiOkResponse({ type: [Warehouse_1.Warehouse] }),
    (0, api_nested_query_decorator_1.ApiNestedQuery)(WarehouseFindManyArgs_1.WarehouseFindManyArgs),
    __param(0, common.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WarehouseControllerBase.prototype, "warehouses", null);
__decorate([
    common.Get("/:id"),
    swagger.ApiOkResponse({ type: Warehouse_1.Warehouse }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    __param(0, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WarehouseWhereUniqueInput_1.WarehouseWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], WarehouseControllerBase.prototype, "warehouse", null);
__decorate([
    common.Patch("/:id"),
    swagger.ApiOkResponse({ type: Warehouse_1.Warehouse }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    __param(0, common.Param()),
    __param(1, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WarehouseWhereUniqueInput_1.WarehouseWhereUniqueInput,
        WarehouseUpdateInput_1.WarehouseUpdateInput]),
    __metadata("design:returntype", Promise)
], WarehouseControllerBase.prototype, "updateWarehouse", null);
__decorate([
    common.Delete("/:id"),
    swagger.ApiOkResponse({ type: Warehouse_1.Warehouse }),
    swagger.ApiNotFoundResponse({ type: errors.NotFoundException }),
    __param(0, common.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WarehouseWhereUniqueInput_1.WarehouseWhereUniqueInput]),
    __metadata("design:returntype", Promise)
], WarehouseControllerBase.prototype, "deleteWarehouse", null);
//# sourceMappingURL=warehouse.controller.base.js.map