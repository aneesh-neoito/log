import { LogCoreSyslogTransportConfigDto } from '../log-core-config.dto';
export declare const createSyslogTransport: (options: LogCoreSyslogTransportConfigDto) => import("winston-syslog").SyslogTransportInstance;
