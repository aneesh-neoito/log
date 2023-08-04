import { LogCoreConsoleTransportConfigDto } from '../log-core-config.dto';
import * as Winston from 'winston';
export declare const createConsoleTransport: (options: LogCoreConsoleTransportConfigDto) => Winston.transports.ConsoleTransportInstance;
