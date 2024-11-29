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
exports.WarehouseListRelationFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const WarehouseWhereInput_1 = require("./WarehouseWhereInput");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let WarehouseListRelationFilter = class WarehouseListRelationFilter {
    every;
    some;
    none;
};
exports.WarehouseListRelationFilter = WarehouseListRelationFilter;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => WarehouseWhereInput_1.WarehouseWhereInput,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => WarehouseWhereInput_1.WarehouseWhereInput),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => WarehouseWhereInput_1.WarehouseWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", WarehouseWhereInput_1.WarehouseWhereInput)
], WarehouseListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => WarehouseWhereInput_1.WarehouseWhereInput,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => WarehouseWhereInput_1.WarehouseWhereInput),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => WarehouseWhereInput_1.WarehouseWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", WarehouseWhereInput_1.WarehouseWhereInput)
], WarehouseListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => WarehouseWhereInput_1.WarehouseWhereInput,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => WarehouseWhereInput_1.WarehouseWhereInput),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => WarehouseWhereInput_1.WarehouseWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", WarehouseWhereInput_1.WarehouseWhereInput)
], WarehouseListRelationFilter.prototype, "none", void 0);
exports.WarehouseListRelationFilter = WarehouseListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], WarehouseListRelationFilter);
//# sourceMappingURL=WarehouseListRelationFilter.js.map