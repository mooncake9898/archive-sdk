import { Logger } from 'log4js';
import { Queues } from '../../logging/types';
export declare const REQUEST_ID = "requestId";
export declare class AbstractLoggingContext {
    private _requestId;
    get requestId(): string;
    set requestId(value: string);
    getLogger(blueprintKey?: string, topic?: Queues): Logger;
}
