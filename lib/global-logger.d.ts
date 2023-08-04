import { LoggerService } from '@nestjs/common';
import * as Winston from 'winston';
export declare class GlobalLogger implements LoggerService {
    private readonly winston;
    constructor(winston: Winston.Logger);
    error(message: any, trace?: string, context?: string): any;
    log(message: any, context?: string): any;
    warn(message: any, context?: string): any;
}
