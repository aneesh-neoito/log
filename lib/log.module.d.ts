import { DynamicModule } from '@nestjs/common';
import { IConfigMap } from '@nestjs-nodo/config';
import { LogCoreConfigDto } from './log-core-config.dto';
import { ILoggerConfig } from './types';
export declare class LogModule {
    static forRoot(configMap: IConfigMap<LogCoreConfigDto>): DynamicModule;
    static forFeature(...configs: ILoggerConfig[]): DynamicModule;
}
