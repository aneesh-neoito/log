"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LogCoreModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogCoreModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs-nodo/config");
const providers_1 = require("./providers");
const global_logger_1 = require("./global-logger");
const constants_1 = require("./constants");
let LogCoreModule = LogCoreModule_1 = class LogCoreModule {
    static forRoot(configMap) {
        const providers = [
            providers_1.getWinstonProvider(configMap),
            global_logger_1.GlobalLogger,
            {
                provide: providers_1.getLoggerToken({ name: constants_1.LOGGER_GLOBAL_NAME }),
                useClass: global_logger_1.GlobalLogger,
            },
        ];
        return {
            module: LogCoreModule_1,
            imports: [config_1.ConfigModule.forFeature(configMap)],
            providers: [...providers],
            exports: [...providers],
        };
    }
};
LogCoreModule = LogCoreModule_1 = __decorate([
    common_1.Global(),
    common_1.Module({})
], LogCoreModule);
exports.LogCoreModule = LogCoreModule;
