import { DynamicModule } from '@nestjs/common';
import { IConfigMap } from '@nestjs-nodo/config';
import { LogCoreConfigDto } from './log-core-config.dto';
export declare class LogCoreModule {
    static forRoot(configMap: IConfigMap<LogCoreConfigDto>): DynamicModule;
}
