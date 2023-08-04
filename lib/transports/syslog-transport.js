"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSyslogTransport = void 0;
const winston_syslog_1 = require("winston-syslog");
const Winston = require("winston");
const common_1 = require("./common");
const { format } = Winston;
const createSyslogTransport = (options) => {
    return new winston_syslog_1.Syslog({
        level: options.level === 'verbose' ? 'debug' : options.level,
        host: options.host,
        localhost: options.environment,
        port: options.port,
        app_name: process.env.npm_package_name,
        format: format.combine(...(options.colors ? [format.colorize({ all: true })] : []), format.timestamp(), format.printf(common_1.prettylog({ colors: options.colors }))),
    });
};
exports.createSyslogTransport = createSyslogTransport;
