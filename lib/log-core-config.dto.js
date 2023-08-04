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
exports.LogCoreConfigDto = exports.LogCoreConfigTransportsDto = exports.LogCoreFileTransportConfigDto = exports.LogCoreConsoleTransportConfigDto = exports.LogCoreSyslogTransportConfigDto = void 0;
const types_1 = require("./types");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class LogCoreSyslogTransportConfigDto {
}
__decorate([
    class_validator_1.IsEnum(types_1.LogLevels),
    __metadata("design:type", String)
], LogCoreSyslogTransportConfigDto.prototype, "level", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], LogCoreSyslogTransportConfigDto.prototype, "colors", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], LogCoreSyslogTransportConfigDto.prototype, "host", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], LogCoreSyslogTransportConfigDto.prototype, "environment", void 0);
__decorate([
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], LogCoreSyslogTransportConfigDto.prototype, "port", void 0);
exports.LogCoreSyslogTransportConfigDto = LogCoreSyslogTransportConfigDto;
class LogCoreConsoleTransportConfigDto {
}
__decorate([
    class_validator_1.IsEnum(types_1.LogLevels),
    __metadata("design:type", String)
], LogCoreConsoleTransportConfigDto.prototype, "level", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], LogCoreConsoleTransportConfigDto.prototype, "colors", void 0);
exports.LogCoreConsoleTransportConfigDto = LogCoreConsoleTransportConfigDto;
class LogCoreFileTransportConfigDto {
}
__decorate([
    class_validator_1.IsEnum(types_1.LogLevels),
    __metadata("design:type", String)
], LogCoreFileTransportConfigDto.prototype, "level", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], LogCoreFileTransportConfigDto.prototype, "directory", void 0);
exports.LogCoreFileTransportConfigDto = LogCoreFileTransportConfigDto;
class LogCoreConfigTransportsDto {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type((t) => LogCoreConsoleTransportConfigDto),
    __metadata("design:type", LogCoreConsoleTransportConfigDto)
], LogCoreConfigTransportsDto.prototype, "console", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type((t) => LogCoreSyslogTransportConfigDto),
    __metadata("design:type", LogCoreSyslogTransportConfigDto)
], LogCoreConfigTransportsDto.prototype, "syslog", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type((t) => LogCoreFileTransportConfigDto),
    __metadata("design:type", LogCoreFileTransportConfigDto)
], LogCoreConfigTransportsDto.prototype, "file", void 0);
exports.LogCoreConfigTransportsDto = LogCoreConfigTransportsDto;
class LogCoreConfigDto {
}
__decorate([
    class_validator_1.ValidateNested(),
    class_validator_1.IsDefined(),
    class_transformer_1.Type((t) => LogCoreConfigTransportsDto),
    __metadata("design:type", LogCoreConfigTransportsDto)
], LogCoreConfigDto.prototype, "transports", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], LogCoreConfigDto.prototype, "silent", void 0);
exports.LogCoreConfigDto = LogCoreConfigDto;
