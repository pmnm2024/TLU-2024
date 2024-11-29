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
exports.DateTimeNullableFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let DateTimeNullableFilter = class DateTimeNullableFilter {
    equals;
    in;
    notIn;
    lt;
    lte;
    gt;
    gte;
    not;
};
exports.DateTimeNullableFilter = DateTimeNullableFilter;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: Date,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => Date, {
        nullable: true,
    }),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Object)
], DateTimeNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: [Date],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => [Date], {
        nullable: true,
    }),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Object)
], DateTimeNullableFilter.prototype, "in", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: [Date],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => [Date], {
        nullable: true,
    }),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Object)
], DateTimeNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: Date,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => Date, {
        nullable: true,
    }),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], DateTimeNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: Date,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => Date, {
        nullable: true,
    }),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], DateTimeNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: Date,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => Date, {
        nullable: true,
    }),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], DateTimeNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: Date,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => Date, {
        nullable: true,
    }),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], DateTimeNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: Date,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => Date, {
        nullable: true,
    }),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], DateTimeNullableFilter.prototype, "not", void 0);
exports.DateTimeNullableFilter = DateTimeNullableFilter = __decorate([
    (0, graphql_1.InputType)({
        isAbstract: true,
        description: undefined,
    })
], DateTimeNullableFilter);
//# sourceMappingURL=DateTimeNullableFilter.js.map