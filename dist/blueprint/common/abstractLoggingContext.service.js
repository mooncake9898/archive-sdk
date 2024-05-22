"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractLoggingContext = exports.REQUEST_ID = void 0;
const archiveLogger_1 = require("../common/archiveLogger");
exports.REQUEST_ID = 'requestId';
// export abstract class AbstractLoggingContext {
class AbstractLoggingContext {
    // private readonly cache: VisionCache;
    // private readonly configService: ConfigService;
    // constructor(cache: VisionCache, configService: ConfigService) {
    //   this.cache = cache;
    //   this.configService = configService;
    // }
    get requestId() {
        return this._requestId;
    }
    set requestId(value) {
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
    getLogger(blueprintKey = null, topic) {
        const logger = blueprintKey ? archiveLogger_1.ArchiveLogger.getBlueprintLogger(blueprintKey, topic) : archiveLogger_1.ArchiveLogger.getLogger();
        logger.addContext(exports.REQUEST_ID, this.requestId);
        return logger;
    }
}
exports.AbstractLoggingContext = AbstractLoggingContext;
//# sourceMappingURL=abstractLoggingContext.service.js.map