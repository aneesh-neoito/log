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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalLogger = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("./constants");
const Winston = require("winston");
let GlobalLogger = class GlobalLogger {
    constructor(winston) {
        this.winston = winston;
    }
    error(message, trace, context) {
        this.winston.log({
            level: 'error',
            message,
            stack: trace,
            context: { name: context },
        });
    }
    log(message, context) {
        this.winston.log({
            level: 'info',
            message,
            context: { name: context },
        });
    }
    warn(message, context) {
        this.winston.log({
            level: 'warn',
            message,
            context: { name: context },
        });
    }
};
GlobalLogger = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.LOGGER_WINSTON_TOKEN)),
    __metadata("design:paramtypes", [Object])
], GlobalLogger);
exports.GlobalLogger = GlobalLogger;
