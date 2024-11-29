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
exports.StringNullableFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const QueryMode_1 = require("./QueryMode");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let StringNullableFilter = class StringNullableFilter {
    equals;
    in;
    notIn;
    lt;
    lte;
    gt;
    gte;
    contains;
    startsWith;
    endsWith;
    mode;
    not;
};
exports.StringNullableFilter = StringNullableFilter;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: String,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", Object)
], StringNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: [String],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => [String], {
        nullable: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", Object)
], StringNullableFilter.prototype, "in", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: [String],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => [String], {
        nullable: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", Object)
], StringNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: String,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: String,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: String,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: String,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: String,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "contains", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: String,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "startsWith", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: String,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "endsWith", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        enum: ["Default", "Insensitive"],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => QueryMode_1.QueryMode, {
        nullable: true,
    }),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "mode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: String,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "not", void 0);
exports.StringNullableFilter = StringNullableFilter = __decorate([
    (0, graphql_1.InputType)({
        isAbstract: true,
    })
], StringNullableFilter);
//# sourceMappingURL=StringNullableFilter.js.map