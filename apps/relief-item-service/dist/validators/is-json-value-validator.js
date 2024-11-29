"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsJSONValue = IsJSONValue;
const class_validator_1 = require("class-validator");
const isJSON_1 = __importDefault(require("validator/lib/isJSON"));
function IsJSONValue(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: "IsJSONValue",
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    if (typeof value === "string") {
                        return (0, isJSON_1.default)(value);
                    }
                    return (0, isJSON_1.default)(JSON.stringify(value));
                },
                defaultMessage(args) {
                    return `${args.property} must be a valid json`;
                },
            },
        });
    };
}
//# sourceMappingURL=is-json-value-validator.js.map