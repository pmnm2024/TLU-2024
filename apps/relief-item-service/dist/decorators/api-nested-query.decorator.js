"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiNestedQuery = ApiNestedQuery;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
require("reflect-metadata");
const generateApiQueryObject = (prop, propType, required, isArray) => {
    if (propType === Number) {
        return {
            required,
            name: prop,
            style: "deepObject",
            explode: true,
            type: "number",
            isArray,
        };
    }
    else if (propType === String) {
        return {
            required,
            name: prop,
            style: "deepObject",
            explode: true,
            type: "string",
            isArray,
        };
    }
    else {
        return {
            required,
            name: prop,
            style: "deepObject",
            explode: true,
            type: "object",
            isArray,
            schema: {
                $ref: (0, swagger_1.getSchemaPath)(propType),
            },
        };
    }
};
function ApiNestedQuery(query) {
    const constructor = query.prototype;
    const properties = Reflect.getMetadata("swagger/apiModelPropertiesArray", constructor).map((prop) => prop.slice(1));
    const decorators = properties
        .map((property) => {
        const { required, isArray } = Reflect.getMetadata("swagger/apiModelProperties", constructor, property);
        const propertyType = Reflect.getMetadata("design:type", constructor, property);
        const typedQuery = generateApiQueryObject(property, propertyType, required, isArray);
        return [(0, swagger_1.ApiExtraModels)(propertyType), (0, swagger_1.ApiQuery)(typedQuery)];
    })
        .flat();
    return (0, common_1.applyDecorators)(...decorators);
}
//# sourceMappingURL=api-nested-query.decorator.js.map