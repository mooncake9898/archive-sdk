import { ArchiveLogger } from '../../axios/logger';
import { ExternalResponseCacheService } from '../../cache';
import { Queues } from '../../logging';
import { Injectable } from '@nestjs/common';
import { Logger } from 'log4js';

export const REQUEST_ID = 'requestId';

@Injectable()
export abstract class AbstractLoggingContext {
  private _requestId: string;

  constructor(private readonly cache: ExternalResponseCacheService) {}

  get requestId(): string {
    return this._requestId;
  }

  set requestId(value: string) {
    this._requestId = value;
  }

  getCache() {
    return this.cache;
  }

  getLogger(blueprintKey: string = null, topic?: Queues): Logger {
    const logger = blueprintKey ? ArchiveLogger.getBlueprintLogger(blueprintKey, topic) : ArchiveLogger.getLogger();
    logger.addContext(REQUEST_ID, this.requestId);
    return logger;
  }

  abstract getConfigService();
}
