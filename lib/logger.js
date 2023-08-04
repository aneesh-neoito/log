"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const config_1 = require("@nestjs-nodo/config");
class Logger {
    constructor(winston, context, config) {
        this.winston = winston;
        this.context = context;
        this.config = config;
    }
    getTraceId() {
        var _a;
        return (_a = this.config.getContext()) === null || _a === void 0 ? void 0 : _a.get(config_1.ConfigContext.X_TRACE_ID);
    }
    debug(message, data) {
        this.winston.log({
            level: 'debug',
            message,
            data,
            context: this.context,
            traceId: this.getTraceId(),
        });
        return this;
    }
    verbose(message, data) {
        this.winston.log({
            level: 'verbose',
            message,
            data,
            context: this.context,
            traceId: this.getTraceId(),
        });
        return this;
    }
    info(message, data) {
        this.winston.log({
            level: 'info',
            message,
            data,
            context: this.context,
            traceId: this.getTraceId(),
        });
        return this;
    }
    log(message, data) {
        this.winston.log({
            level: 'info',
            message,
            data,
            context: this.context,
            traceId: this.getTraceId(),
        });
        return this;
    }
    warn(message, data) {
        this.winston.log({
            level: 'warn',
            message,
            data,
            context: this.context,
            traceId: this.getTraceId(),
        });
        return this;
    }
    error(message, error, data) {
        this.winston.log({
            level: 'error',
            message,
            stack: typeof error === 'string'
                ? error
                : error instanceof Error
                    ? error.stack || error.message || error.name
                    : null,
            data,
            context: this.context,
            traceId: this.getTraceId(),
        });
        return this;
    }
}
exports.Logger = Logger;
