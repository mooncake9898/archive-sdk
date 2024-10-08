import { ExternalResponseCacheService } from '../../cache';
import { Queues } from '../../logging';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'log4js';

export declare const REQUEST_ID = 'requestId';
export declare abstract class AbstractLoggingContext {
  private readonly cache;
  private readonly configService;
  private _requestId;
  constructor(cache: ExternalResponseCacheService, configService: ConfigService);
  get requestId(): string;
  set requestId(value: string);
  getConfigService(): ConfigService<Record<string, unknown>, false>;
  getCache(): ExternalResponseCacheService;
  getLogger(blueprintKey?: string, topic?: Queues): Logger;
}
