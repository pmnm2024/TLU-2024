"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseFindManyArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const WarehouseWhereInput_1 = require("./WarehouseWhereInput");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const WarehouseOrderByInput_1 = require("./WarehouseOrderByInput");
let WarehouseFindManyArgs = class WarehouseFindManyArgs {
    where;
    orderBy;
    skip;
    take;
};
exports.WarehouseFindManyArgs = WarehouseFindManyArgs;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => WarehouseWhereInput_1.WarehouseWhereInput,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, graphql_1.Field)(() => WarehouseWhereInput_1.WarehouseWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => WarehouseWhereInput_1.WarehouseWhereInput),
    __metadata("design:type", WarehouseWhereInput_1.WarehouseWhereInput)
], WarehouseFindManyArgs.prototype, "where", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: [WarehouseOrderByInput_1.WarehouseOrderByInput],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, graphql_1.Field)(() => [WarehouseOrderByInput_1.WarehouseOrderByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WarehouseOrderByInput_1.WarehouseOrderByInput),
    __metadata("design:type", Array)
], WarehouseFindManyArgs.prototype, "orderBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: Number,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], WarehouseFindManyArgs.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: Number,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], WarehouseFindManyArgs.prototype, "take", void 0);
exports.WarehouseFindManyArgs = WarehouseFindManyArgs = __decorate([
    (0, graphql_1.ArgsType)()
], WarehouseFindManyArgs);
//# sourceMappingURL=WarehouseFindManyArgs.js.map