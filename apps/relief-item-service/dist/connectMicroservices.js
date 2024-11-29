"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMicroservices = connectMicroservices;
const config_1 = require("@nestjs/config");
async function connectMicroservices(app) {
    const configService = app.get(config_1.ConfigService);
}
//# sourceMappingURL=connectMicroservices.js.map