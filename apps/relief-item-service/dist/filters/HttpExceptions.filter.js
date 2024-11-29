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
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const client_1 = require("@prisma/client");
let HttpExceptionFilter = class HttpExceptionFilter extends core_1.BaseExceptionFilter {
    errorCodesStatusMapping = {
        P2000: common_1.HttpStatus.BAD_REQUEST,
        P2002: common_1.HttpStatus.CONFLICT,
        P2025: common_1.HttpStatus.NOT_FOUND,
    };
    constructor(applicationRef) {
        super(applicationRef);
    }
    catch(exception, host) {
        const statusCode = this.errorCodesStatusMapping[exception.code];
        let message;
        if (host.getType() === "http") {
            const ctx = host.switchToHttp();
            const response = ctx.getResponse();
            if (exception.code === "P2002") {
                const fields = exception.meta.target;
                message = `Another record with the requested (${fields.join(", ")}) already exists`;
            }
            else {
                message =
                    `[${exception.code}]: ` +
                        this.exceptionShortMessage(exception.message);
            }
            if (!Object.keys(this.errorCodesStatusMapping).includes(exception.code)) {
                return super.catch(exception, host);
            }
            const errorResponse = {
                message: message,
                statusCode: statusCode,
            };
            response.status(statusCode).send(errorResponse);
        }
        return new common_1.HttpException({ statusCode, message }, statusCode);
    }
    exceptionShortMessage(message) {
        const shortMessage = message.substring(message.indexOf("→"));
        return shortMessage
            .substring(shortMessage.indexOf("\n"))
            .replace(/\n/g, "")
            .trim();
    }
};
exports.HttpExceptionFilter = HttpExceptionFilter;
exports.HttpExceptionFilter = HttpExceptionFilter = __decorate([
    (0, common_1.Catch)(client_1.Prisma?.PrismaClientKnownRequestError),
    __metadata("design:paramtypes", [Object])
], HttpExceptionFilter);
//# sourceMappingURL=HttpExceptions.filter.js.map