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
exports.WarehouseWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const DateTimeFilter_1 = require("../../util/DateTimeFilter");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const StringFilter_1 = require("../../util/StringFilter");
const IntFilter_1 = require("../../util/IntFilter");
let WarehouseWhereInput = class WarehouseWhereInput {
    createdAt;
    id;
    name;
    quantity;
    supportRequestTypeId;
    supportRequestTypeName;
    unit;
    updatedAt;
};
exports.WarehouseWhereInput = WarehouseWhereInput;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: DateTimeFilter_1.DateTimeFilter,
    }),
    (0, class_transformer_1.Type)(() => DateTimeFilter_1.DateTimeFilter),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => DateTimeFilter_1.DateTimeFilter, {
        nullable: true,
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], WarehouseWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: StringFilter_1.StringFilter,
    }),
    (0, class_transformer_1.Type)(() => StringFilter_1.StringFilter),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => StringFilter_1.StringFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], WarehouseWhereInput.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: StringFilter_1.StringFilter,
    }),
    (0, class_transformer_1.Type)(() => StringFilter_1.StringFilter),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => StringFilter_1.StringFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], WarehouseWhereInput.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: IntFilter_1.IntFilter,
    }),
    (0, class_transformer_1.Type)(() => IntFilter_1.IntFilter),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => IntFilter_1.IntFilter, {
        nullable: true,
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], WarehouseWhereInput.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: StringFilter_1.StringFilter,
    }),
    (0, class_transformer_1.Type)(() => StringFilter_1.StringFilter),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => StringFilter_1.StringFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], WarehouseWhereInput.prototype, "supportRequestTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: StringFilter_1.StringFilter,
    }),
    (0, class_transformer_1.Type)(() => StringFilter_1.StringFilter),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => StringFilter_1.StringFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], WarehouseWhereInput.prototype, "supportRequestTypeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: StringFilter_1.StringFilter,
    }),
    (0, class_transformer_1.Type)(() => StringFilter_1.StringFilter),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => StringFilter_1.StringFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], WarehouseWhereInput.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: DateTimeFilter_1.DateTimeFilter,
    }),
    (0, class_transformer_1.Type)(() => DateTimeFilter_1.DateTimeFilter),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => DateTimeFilter_1.DateTimeFilter, {
        nullable: true,
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], WarehouseWhereInput.prototype, "updatedAt", void 0);
exports.WarehouseWhereInput = WarehouseWhereInput = __decorate([
    (0, graphql_1.InputType)()
], WarehouseWhereInput);
//# sourceMappingURL=WarehouseWhereInput.js.map