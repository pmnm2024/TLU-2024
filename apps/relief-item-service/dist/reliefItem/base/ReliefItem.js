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
exports.ReliefItem = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let ReliefItem = class ReliefItem {
    createdAt;
    id;
    name;
    quantity;
    supportRequestTypeId;
    supportRequestTypeName;
    unit;
    updatedAt;
};
exports.ReliefItem = ReliefItem;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], ReliefItem.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ReliefItem.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1000),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ReliefItem.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: Number,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(-999999999),
    (0, class_validator_1.Max)(999999999),
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], ReliefItem.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1000),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ReliefItem.prototype, "supportRequestTypeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1000),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ReliefItem.prototype, "supportRequestTypeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1000),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ReliefItem.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], ReliefItem.prototype, "updatedAt", void 0);
exports.ReliefItem = ReliefItem = __decorate([
    (0, graphql_1.ObjectType)()
], ReliefItem);
//# sourceMappingURL=ReliefItem.js.map