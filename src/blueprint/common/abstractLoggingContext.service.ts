
import { ArchiveLogger } from '../common/archiveLogger';
// import { VisionCache } from '@src/common/visionCache';
import { Logger } from 'log4js';
import { Queues } from '../../logging/types';

export const REQUEST_ID = 'requestId';

// export abstract class AbstractLoggingContext {
  export class AbstractLoggingContext {
  private _requestId: string;
  // private readonly cache: VisionCache;
  // private readonly configService: ConfigService;

  // constructor(cache: VisionCache, configService: ConfigService) {
  //   this.cache = cache;
  //   this.configService = configService;
  // }

  get requestId(): string {
    return this._requestId;
  }

  set requestId(value: string) {
    this._requestId = value;
  }

  // getConfigService() {
  //   return this.configService;
  // }

  // getCache() {
  //   return this.cache;
  // }

  // public getBareAxios(): AxiosInstance {
  //   axios.defaults.headers.common['X-Request-ID'] = this.loggingContext.requestId;
  //   return axios;
  // }

  getLogger(blueprintKey: string = null, topic?: Queues): Logger {
    const logger = blueprintKey ? ArchiveLogger.getBlueprintLogger(blueprintKey, topic) : ArchiveLogger.getLogger();
    logger.addContext(REQUEST_ID, this.requestId);
    return logger;
  }
}
