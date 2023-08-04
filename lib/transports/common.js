"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prettylog = void 0;
const DAT = require("date-and-time");
const _ = require("lodash");
const util_1 = require("util");
function prettylog(options) {
    return (info) => {
        const br = (text) => (text ? '\n' + text : text);
        const date = DAT.format(new Date(info.timestamp), 'HH:mm:ss');
        const context = _.padEnd(info.context.name, 20, ' ');
        const level = _.padEnd(info.level, 18, ' ');
        const data = info.data
            ? util_1.inspect(info.data, { depth: 5, colors: options.colors })
            : '';
        const stack = info.stack || '';
        return `[${date}] ${level} ${context} ${info.message}${br(data)}${br(stack)}`;
    };
}
exports.prettylog = prettylog;
