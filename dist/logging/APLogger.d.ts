import { KafkaManager } from './KafkaManager';
import { Queues } from './types';
import * as log4js from 'log4js';
interface AppenderInterface {
    stdoutAppender: (layout: any, timezoneOffset: any) => {
        (loggingEvent: log4js.LoggingEvent): void;
        shutdown(done: any): void;
    };
    configure: (config: any, layouts: any, findAppender: any, levels: any) => {
        (loggingEvent: log4js.LoggingEvent): void;
        shutdown(done: any): void;
    };
}
export declare function buildAppender(kafkaManager: KafkaManager, topic?: Queues, blueprintId?: string): AppenderInterface;
export declare class APLogger {
    private readonly logger;
    constructor(appender: AppenderInterface);
    getLogger(): log4js.Logger;
    static setLog4jsConfig(appender: AppenderInterface): void;
}
export {};
