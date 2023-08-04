"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogModule = void 0;
const log_core_module_1 = require("./log-core.module");
const providers_1 = require("./providers");
const config_1 = require("@nestjs-nodo/config");
class LogModule {
    static forRoot(configMap) {
        return {
            module: LogModule,
            imports: [log_core_module_1.LogCoreModule.forRoot(configMap)],
        };
    }
    static forFeature(...configs) {
        const providers = configs.map((tClass) => providers_1.getLoggerProvider(tClass));
        return {
            module: LogModule,
            imports: [config_1.ConfigModule],
            providers: [...providers],
            exports: [...providers],
        };
    }
}
exports.LogModule = LogModule;
