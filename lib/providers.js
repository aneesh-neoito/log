"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWinstonProvider = exports.InjectLogger = exports.getLoggerProvider = exports.getLoggerToken = void 0;
const Winston = require("winston");
const logger_1 = require("./logger");
const constants_1 = require("./constants");
const utils_1 = require("@nestjs-nodo/utils");
const config_1 = require("@nestjs-nodo/config");
_a = utils_1.ProviderUtils.createDynamicProvider({
    namespace: 'LOGGER',
    mapper: (param) => param.name,
    provider: (param) => {
        return {
            inject: [constants_1.LOGGER_WINSTON_TOKEN, config_1.ConfigService],
            useFactory: (winstonLogger, configService) => {
                return new logger_1.Logger(winstonLogger, param, configService);
            },
        };
    },
}), exports.getLoggerToken = _a.getToken, exports.getLoggerProvider = _a.getProvider, exports.InjectLogger = _a.getInjector;
const getWinstonProvider = (configMap) => ({
    provide: constants_1.LOGGER_WINSTON_TOKEN,
    inject: [config_1.getConfigToken(configMap)],
    useFactory: async (config) => {
        const transports = [];
        if (config.transports.console) {
            const { createConsoleTransport } = require('./transports/console-transport');
            transports.push(createConsoleTransport(config.transports.console));
        }
        if (config.transports.syslog) {
            const { createSyslogTransport } = require('./transports/syslog-transport');
            transports.push(createSyslogTransport(config.transports.syslog));
        }
        if (config.transports.file) {
            const { createFileTransport } = require('./transports/file-transport');
            transports.push(createFileTransport(config.transports.file));
        }
        return Winston.createLogger({
            levels: Winston.config.npm.levels,
            silent: config.silent,
            transports,
        });
    },
});
exports.getWinstonProvider = getWinstonProvider;
