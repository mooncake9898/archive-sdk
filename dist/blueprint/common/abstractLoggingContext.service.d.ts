import { ExternalResponseCacheService } from '../../cache';
import { Queues } from '../../logging';
import { Logger } from 'log4js';

export declare const REQUEST_ID = 'requestId';
export declare abstract class AbstractLoggingContext {
  private readonly cache;
  private _requestId;
  constructor(cache: ExternalResponseCacheService);
  get requestId(): string;
  set requestId(value: string);
  getCache(): ExternalResponseCacheService;
  getLogger(blueprintKey?: string, topic?: Queues): Logger;
  abstract getConfigService(): any;
}
