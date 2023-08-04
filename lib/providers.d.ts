import { FactoryProvider } from '@nestjs/common/interfaces';
import { IConfigMap } from '@nestjs-nodo/config';
import { LogCoreConfigDto } from './log-core-config.dto';
import { ILoggerConfig } from './types';
export declare const getLoggerToken: import("@nestjs-nodo/utils").TokenFactory<ILoggerConfig>, getLoggerProvider: import("@nestjs-nodo/utils").ProviderFactory<ILoggerConfig, any>, InjectLogger: import("@nestjs-nodo/utils").InjectorFactory<ILoggerConfig>;
export declare const getWinstonProvider: (configMap: IConfigMap<LogCoreConfigDto>) => FactoryProvider;
