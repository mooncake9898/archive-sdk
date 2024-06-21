"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var VisionCache_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionCache = void 0;
/**
 * Class that's responsible for getting cached info if exists.
 */
// import { ApiCallResults } from './apiCallResults.entity';
// import { AvailableNetwork } from './config/availableNetwork';
// import { RequestContext } from './requestContext';
const common_1 = require("@nestjs/common");
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
let VisionCache = VisionCache_1 = class VisionCache {
    constructor(cache) {
        this.cache = cache;
        this.skipCache = process.env.NODE_ENV == 'development';
    }
    /**
     * Helper to try and fetch from the cache first based on the key, or perform (and cache) if key doesn't exist
     * @param context
     * @param cacheKey
     * @param ttl
     * @param onCacheMiss
     */
    // async cacheOrPerform(context: RequestContext, cacheKey: string, ttl: number, onCacheMiss: any)
    cacheOrPerform(cacheKey, ttl, onCacheMiss) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.skipCache) {
                // we want to skip any cache on development so we don't run into caching issues
                return yield onCacheMiss();
            }
            // const key = this.maybeAddPrefix(context, cacheKey);
            const key = this.maybeAddPrefix(cacheKey);
            try {
                const cached = yield this.cache.get(key);
                if (cached) {
                    return JSON.parse(cached, this.reviver);
                }
                // const dbCached = await this.apiCallResultsRepo.findOneBy({ key });
                // if (dbCached) return dbCached.value;
                // No cached data, so perform the operation and store the result to db if it's a valid response and PERM_CACHE_DURATION.
                const entity = yield onCacheMiss();
                if (entity === 0) {
                    return 0; // 0 can be temporary, so don't cache
                }
                if (!entity) {
                    return null;
                }
                if (entity === '') {
                    return null;
                }
                if (Array.isArray(entity) && entity.length == 0) {
                    return null;
                }
                if (entity instanceof Map && entity.size == 0) {
                    return null;
                }
                // await this.maybeCacheResult(ttl, context, key, entity);
                yield this.maybeCacheResult(ttl, key, entity);
                return entity;
            }
            catch (e) {
                console.error(e.message);
                throw e;
            }
        });
    }
    // private async maybeCacheResult(ttl: number, context: RequestContext, key: string, entity)
    maybeCacheResult(ttl, key, entity) {
        return __awaiter(this, void 0, void 0, function* () {
            if (ttl == VisionCache_1.PERM_CACHE_DURATION) {
                // await this.saveResultToDb(context, key, entity);
            }
            else if (ttl > 0) {
                yield this.cache.set(key, JSON.stringify(entity, this.replacer), 'EX', ttl);
            }
        });
    }
    // private async saveResultToDb(context: RequestContext, key: string, entity: object) {
    //   const callResultsRepo = new ApiCallResults();
    //   callResultsRepo.chainId = context.getNetwork();
    //   callResultsRepo.key = key;
    //   callResultsRepo.value = entity;
    //   await this.apiCallResultsRepo.upsert(callResultsRepo, ['key']);
    // }
    getRestClient() {
        return this.cache;
    }
    // private maybeAddPrefix(context: RequestContext, key: string) {
    maybeAddPrefix(key) {
        // for non eth mainnet, add in a prefix
        // FIXME: this
        // if (context && context.getNetwork() != AvailableNetwork.ETHEREUM) {
        //   const env = process.env.NODE_ENV === 'production' ? '' : process.env.NODE_ENV;
        //   return `NETWORK_${env}::${context.getNetwork()}:${key}`;
        // }
        return key;
    }
    replacer(key, value) {
        if (value instanceof Map) {
            return {
                dataType: 'Map',
                value: Array.from(value.entries()), // or with spread: value: [...value]
            };
        }
        else {
            return value;
        }
    }
    reviver(key, value) {
        if (typeof value === 'object' && value !== null) {
            if (value.dataType === 'Map') {
                return new Map(value.value);
            }
        }
        return value;
    }
};
exports.VisionCache = VisionCache;
VisionCache.SHORT_CACHE_DURATION = 60 * 3;
VisionCache.MEDIUM_CACHE_DURATION = 60 * 30;
VisionCache.PERM_CACHE_DURATION = 60 * 60 * 24 * 999;
exports.VisionCache = VisionCache = VisionCache_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('CACHE_ETH'))
], VisionCache);
//# sourceMappingURL=visionCache.js.map