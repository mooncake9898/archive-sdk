/**
 * Class that's responsible for getting cached info if exists.
 */
import { ApiCallResults } from './apiCallResults.entity';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import AsyncRedis from 'async-redis';
import { ethers } from 'ethers';
import { Repository } from 'typeorm';

@Injectable()
export class ExternalResponseCacheService {
  public static readonly SUPER_SHORT_CACHE_DURATION = process.env.NODE_ENV == 'production' ? 60 : 10;
  public static readonly SHORT_CACHE_DURATION = process.env.NODE_ENV == 'production' ? 60 * 3 : 10;
  public static readonly TEN_MIN_CACHE_DURATION = process.env.NODE_ENV == 'production' ? 60 * 10 : 10;
  public static readonly MEDIUM_CACHE_DURATION = process.env.NODE_ENV == 'production' ? 60 * 30 : 10;
  public static readonly SIX_HOUR_DURATION = process.env.NODE_ENV == 'production' ? 60 * 60 * 6 : 10;
  public static readonly LONG_CACHE_DURATION = process.env.NODE_ENV == 'production' ? 60 * 60 * 48 : 10;
  public static readonly PERM_CACHE_DURATION = process.env.NODE_ENV == 'production' ? 60 * 60 * 24 * 999 : 10;

  private skipCache: boolean;

  constructor(
    @Inject('CACHE_ETH') private cache: AsyncRedis,
    @InjectRepository(ApiCallResults) private apiCallResultsRepo: Repository<ApiCallResults>,
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
  async cacheOrPerform(chainId: string, cacheKey: string, ttl: number, onCacheMiss: any) {
    if (this.skipCache) {
      // we want to skip any cache on development so we don't run into caching issues
      return await onCacheMiss();
    }

    const key = this.maybeAddPrefix(chainId, cacheKey);

    try {
      const cached = await this.cache.get(key);
      if (cached) {
        return JSON.parse(cached, this.reviver);
      }

      const dbCached = await this.apiCallResultsRepo.findOneBy({ key });
      if (dbCached) return dbCached.value;

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
        return [];
      }

      if (entity instanceof Map && entity.size == 0) {
        return null;
      }

      await this.maybeCacheResult(ttl, chainId, key, entity);

      return entity;
    } catch (e) {
      console.error(e.message);
      throw e;
    }
  }

  private async maybeCacheResult(ttl: number, chainId: string, key: string, entity) {
    if (ttl == ExternalResponseCacheService.PERM_CACHE_DURATION) {
      await this.saveResultToDb(chainId, key, entity);
    } else if (ttl > 0) {
      await this.cache.set(key, JSON.stringify(entity, this.replacer), 'EX', ttl);
    }
  }

  private async saveResultToDb(chainId: string, key: string, entity: object) {
    const callResultsRepo = new ApiCallResults();
    callResultsRepo.chainId = Number(chainId);
    callResultsRepo.key = key;
    callResultsRepo.value = entity;
    await this.apiCallResultsRepo.upsert(callResultsRepo, ['key']);
  }

  getRestClient(): AsyncRedis {
    return this.cache;
  }

  private maybeAddPrefix(chainId: string, key: string) {
    // for non eth mainnet, add in a prefix
    if (chainId != '1') {
      const env = process.env.NODE_ENV === 'production' ? '' : process.env.NODE_ENV;
      return `NETWORK_${env}::${chainId}:${key}`;
    }

    return key;
  }

  private replacer(key, value) {
    if (value instanceof Map) {
      return {
        dataType: 'Map',
        value: Array.from(value.entries()), // or with spread: value: [...value]
      };
    } else if (this[key] instanceof ethers.BigNumber) {
      return { dataType: 'ethers.BigNumber', value: this[key].toString() };
    } else {
      return value;
    }
  }

  private reviver(
    key: any,
    value: {
      dataType: string;
      value: Iterable<readonly [unknown, unknown]>;
    },
  ) {
    if (typeof value === 'object' && value !== null) {
      if (value.dataType === 'Map') {
        return new Map(value.value);
      } else if (value.dataType === 'ethers.BigNumber') {
        return ethers.BigNumber.from(value.value);
      }
    }
    return value;
  }
}
