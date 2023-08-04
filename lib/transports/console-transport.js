"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConsoleTransport = void 0;
const Winston = require("winston");
const common_1 = require("./common");
const { format } = Winston;
const createConsoleTransport = (options) => {
    return new Winston.transports.Console({
        level: options.level,
        format: format.combine(...(options.colors ? [format.colorize({ all: true })] : []), format.timestamp(), format.printf(common_1.prettylog({ colors: options.colors }))),
    });
};
exports.createConsoleTransport = createConsoleTransport;
