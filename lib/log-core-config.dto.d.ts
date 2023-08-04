import { LogLevels } from './types';
export declare class LogCoreSyslogTransportConfigDto {
    level: LogLevels;
    colors: boolean;
    host: string;
    environment: string;
    port: number;
}
export declare class LogCoreConsoleTransportConfigDto {
    level: LogLevels;
    colors: boolean;
}
export declare class LogCoreFileTransportConfigDto {
    level: LogLevels;
    directory: string;
}
export declare class LogCoreConfigTransportsDto {
    console?: LogCoreConsoleTransportConfigDto;
    syslog?: LogCoreSyslogTransportConfigDto;
    file?: LogCoreFileTransportConfigDto;
}
export declare class LogCoreConfigDto {
    transports: LogCoreConfigTransportsDto;
    silent: boolean;
}
