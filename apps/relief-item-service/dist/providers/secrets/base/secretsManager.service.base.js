"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretsManagerServiceBase = void 0;
class SecretsManagerServiceBase {
    configService;
    constructor(configService) {
        this.configService = configService;
    }
    async getSecret(key) {
        const value = this.configService.get(key.toString());
        if (value) {
            return value;
        }
        return null;
    }
}
exports.SecretsManagerServiceBase = SecretsManagerServiceBase;
//# sourceMappingURL=secretsManager.service.base.js.map