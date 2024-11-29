"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReliefItemModule = void 0;
const common_1 = require("@nestjs/common");
const reliefItem_module_base_1 = require("./base/reliefItem.module.base");
const reliefItem_service_1 = require("./reliefItem.service");
const reliefItem_controller_1 = require("./reliefItem.controller");
let ReliefItemModule = class ReliefItemModule {
};
exports.ReliefItemModule = ReliefItemModule;
exports.ReliefItemModule = ReliefItemModule = __decorate([
    (0, common_1.Module)({
        imports: [reliefItem_module_base_1.ReliefItemModuleBase],
        controllers: [reliefItem_controller_1.ReliefItemController],
        providers: [reliefItem_service_1.ReliefItemService],
        exports: [reliefItem_service_1.ReliefItemService],
    })
], ReliefItemModule);
//# sourceMappingURL=reliefItem.module.js.map