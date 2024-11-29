"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSetupOptions = exports.swaggerDocumentOptions = exports.swaggerPath = void 0;
const swagger_1 = require("@nestjs/swagger");
exports.swaggerPath = "api";
exports.swaggerDocumentOptions = new swagger_1.DocumentBuilder()
    .setTitle("Ware house")
    .setDescription('\n\n## Congratulations! Your service resource is ready.\n  \nPlease note that all endpoints are secured with JWT Bearer authentication.\nBy default, your service resource comes with one user with the username "admin" and password "admin".\nLearn more in [our docs](https://docs.amplication.com)')
    .addBearerAuth()
    .build();
exports.swaggerSetupOptions = {
    swaggerOptions: {
        persistAuthorization: true,
    },
    customCssUrl: "../swagger/swagger.css",
    customfavIcon: "../swagger/favicon.png",
    customSiteTitle: "Ware house",
};
//# sourceMappingURL=swagger.js.map