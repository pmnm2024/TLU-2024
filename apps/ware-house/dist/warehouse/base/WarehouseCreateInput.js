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
exports.WarehouseCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
let WarehouseCreateInput = class WarehouseCreateInput {
    name;
    quantity;
    supportRequestTypeId;
    supportRequestTypeName;
    unit;
};
exports.WarehouseCreateInput = WarehouseCreateInput;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(256),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], WarehouseCreateInput.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: Number,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Max)(99999999999),
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], WarehouseCreateInput.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(256),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], WarehouseCreateInput.prototype, "supportRequestTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(256),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], WarehouseCreateInput.prototype, "supportRequestTypeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(256),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], WarehouseCreateInput.prototype, "unit", void 0);
exports.WarehouseCreateInput = WarehouseCreateInput = __decorate([
    (0, graphql_1.InputType)()
], WarehouseCreateInput);
//# sourceMappingURL=WarehouseCreateInput.js.map