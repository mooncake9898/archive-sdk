/**
 * Class that's responsible for getting cached info if exists.
 */
// import { ApiCallResults } from './apiCallResults.entity';
// import { AvailableNetwork } from './config/availableNetwork';
// import { RequestContext } from './requestContext';
import { Inject, Injectable } from '@nestjs/common';
import AsyncRedis from 'async-redis';

// import { InjectRepository } from '@nestjs/typeorm';

// import { Repository } from 'typeorm';

@Injectable()
export class VisionCache {
  public static readonly SHORT_CACHE_DURATION = 60 * 3;
  public static readonly MEDIUM_CACHE_DURATION = 60 * 30;
  public static readonly PERM_CACHE_DURATION = 60 * 60 * 24 * 999;

  private skipCache: boolean;

  constructor(
    @Inject('CACHE_ETH') private cache: AsyncRedis, // @InjectRepository(ApiCallResults) private apiCallResultsRepo: Repository<ApiCallResults>,
  ) {
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
  async cacheOrPerform(cacheKey: string, ttl: number, onCacheMiss: any) {
    if (this.skipCache) {
      // we want to skip any cache on development so we don't run into caching issues
      return await onCacheMiss();
    }

    // const key = this.maybeAddPrefix(context, cacheKey);
    const key = this.maybeAddPrefix(cacheKey);

    try {
      const cached = await this.cache.get(key);
      if (cached) {
        return JSON.parse(cached, this.reviver);
      }

      // const dbCached = await this.apiCallResultsRepo.findOneBy({ key });
      // if (dbCached) return dbCached.value;

      // No cached data, so perform the operation and store the result to db if it's a valid response and PERM_CACHE_DURATION.
      const entity = await onCacheMiss();

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
      await this.maybeCacheResult(ttl, key, entity);

      return entity;
    } catch (e) {
      console.error(e.message);
      throw e;
    }
  }

  // private async maybeCacheResult(ttl: number, context: RequestContext, key: string, entity)
  private async maybeCacheResult(ttl: number, key: string, entity) {
    if (ttl == VisionCache.PERM_CACHE_DURATION) {
      // await this.saveResultToDb(context, key, entity);
    } else if (ttl > 0) {
      await this.cache.set(key, JSON.stringify(entity, this.replacer), 'EX', ttl);
    }
  }

  // private async saveResultToDb(context: RequestContext, key: string, entity: object) {
  //   const callResultsRepo = new ApiCallResults();
  //   callResultsRepo.chainId = context.getNetwork();
  //   callResultsRepo.key = key;
  //   callResultsRepo.value = entity;
  //   await this.apiCallResultsRepo.upsert(callResultsRepo, ['key']);
  // }

  getRestClient(): AsyncRedis {
    return this.cache;
  }

  // private maybeAddPrefix(context: RequestContext, key: string) {
  private maybeAddPrefix(key: string) {
    // for non eth mainnet, add in a prefix

    // FIXME: this
    // if (context && context.getNetwork() != AvailableNetwork.ETHEREUM) {
    //   const env = process.env.NODE_ENV === 'production' ? '' : process.env.NODE_ENV;
    //   return `NETWORK_${env}::${context.getNetwork()}:${key}`;
    // }

    return key;
  }

  private replacer(key, value) {
    if (value instanceof Map) {
      return {
        dataType: 'Map',
        value: Array.from(value.entries()), // or with spread: value: [...value]
      };
    } else {
      return value;
    }
  }

  private reviver(key, value) {
    if (typeof value === 'object' && value !== null) {
      if (value.dataType === 'Map') {
        return new Map(value.value);
      }
    }
    return value;
  }
}
