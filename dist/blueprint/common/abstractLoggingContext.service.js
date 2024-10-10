"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractLoggingContext = exports.REQUEST_ID = void 0;
const logger_1 = require("../../axios/logger");
const cache_1 = require("../../cache");
const common_1 = require("@nestjs/common");
exports.REQUEST_ID = 'requestId';
let AbstractLoggingContext = class AbstractLoggingContext {
    constructor(cache) {
        this.cache = cache;
    }
    get requestId() {
        return this._requestId;
    }
    set requestId(value) {
        this._requestId = value;
    }
    getCache() {
        return this.cache;
    }
    getLogger(blueprintKey = null, topic) {
        const logger = blueprintKey ? logger_1.ArchiveLogger.getBlueprintLogger(blueprintKey, topic) : logger_1.ArchiveLogger.getLogger();
        logger.addContext(exports.REQUEST_ID, this.requestId);
        return logger;
    }
};
exports.AbstractLoggingContext = AbstractLoggingContext;
exports.AbstractLoggingContext = AbstractLoggingContext = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cache_1.ExternalResponseCacheService])
], AbstractLoggingContext);
//# sourceMappingURL=abstractLoggingContext.service.js.map