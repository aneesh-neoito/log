import * as Winston from 'winston';
import { LoggerService } from '@nestjs/common';
import { ConfigService } from '@nestjs-nodo/config';
import { ILoggerConfig } from './types';
export declare class Logger implements LoggerService {
    private readonly winston;
    private readonly context;
    private readonly config;
    constructor(winston: Winston.Logger, context: ILoggerConfig, config: ConfigService);
    private getTraceId;
    debug(message: string, data?: any): this;
    verbose(message: string, data?: any): this;
    info(message: string, data?: any): this;
    log(message: string, data?: any): this;
    warn(message: string, data?: any): this;
    error(message: string, error?: Error | string, data?: any): this;
}
