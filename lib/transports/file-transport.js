"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFileTransport = void 0;
const Winston = require("winston");
require("winston-daily-rotate-file");
const path = require("path");
const uuid_1 = require("uuid");
const { format } = Winston;
function createFileTransport(options) {
    const id = process.env.HOSTNAME || uuid_1.v4();
    return new Winston.transports.DailyRotateFile({
        filename: path.join(options.directory, '%DATE%.ndjson'),
        auditFile: path.join(options.directory, `audit.json`),
        datePattern: 'YYYY-MM-DD',
        zippedArchive: false,
        maxSize: '2m',
        maxFiles: '14d',
        level: options.level,
        format: format.combine(format.timestamp(), format.json()),
    });
}
exports.createFileTransport = createFileTransport;
