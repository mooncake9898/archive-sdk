/**
 * Class that's responsible for getting cached info if exists.
 */
import { ApiCallResults } from './apiCallResults.entity';
import AsyncRedis from 'async-redis';
import { Repository } from 'typeorm';
export declare class VisionCache {
    private cache;
    private apiCallResultsRepo;
    static readonly SHORT_CACHE_DURATION: number;
    static readonly MEDIUM_CACHE_DURATION: number;
    static readonly PERM_CACHE_DURATION: number;
    private skipCache;
    constructor(cache: AsyncRedis, apiCallResultsRepo: Repository<ApiCallResults>);
    /**
     * Helper to try and fetch from the cache first based on the key, or perform (and cache) if key doesn't exist
     * @param context
     * @param cacheKey
     * @param ttl
     * @param onCacheMiss
     */
    cacheOrPerform(chainId: string, cacheKey: string, ttl: number, onCacheMiss: any): Promise<any>;
    private maybeCacheResult;
    private saveResultToDb;
    getRestClient(): AsyncRedis;
    private maybeAddPrefix;
    private replacer;
    private reviver;
}
