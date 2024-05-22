import { BlueprintContext } from '../models/blueprintContext';
import { generateAxiosErrorMessage, getRequestHeaders } from './requestUtils';
import { CacheDuration } from '@src/axios';
import axios from 'axios';

export class BlockbydateAPI {
  private baseUrl: string;

  constructor(private context: BlueprintContext) {
    // TODO: override default value
    // this.baseUrl = context.getConfigService().get<string>('BLOCKBYDATE_API_BASE_URL');
    this.baseUrl = 'https://blockbydate.archiveprotocol.com';
  }

  // This retrieves the timestamp corresponding to the latest block
  // synced on BlockByDate for the network from context.getNetwork().
  async getMostRecentTimestamp(): Promise<number> {
    return this.getTimestampFromBlock(0);
  }

  async getTimestampFromBlock(block: number) {
    if (block == -1) {
      return block; // can't parse, just return it
    }

    return await this.getDateByBlockAt(block);
  }

  // This retrieves the latest block
  // synced on BlockByDate for the network from context.getNetwork().
  async getMostRecentBlock(): Promise<number> {
    return this.getBlockFromTimestamp(0);
  }

  async getBlockFromTimestamp(timestamp: number, networkId?: string): Promise<number> {
    //we need to add the networkId to the key as well because there's
    //a usecase where we need to fetch the block from eth l1 and beacon chain of the same timestamp
    //in quick succession, which means the beacon chain block will be wrong because it'll use
    //cached version of l1 eth block
    const network = this.context.getNetwork();
    const networkToQuery = networkId ? networkId : network.toString();

    // when timestamp parameter is 0, we fetch the latest blockNumber so we don't cache the result
    const cacheDuration = timestamp == 0 ? CacheDuration.NO_CACHE : CacheDuration.SHORT_CACHE_DURATION;
    // TODO: use APAxios
    // const axios = await this.context.getAxios(cacheDuration);

    const url = this.baseUrl + `/api/blocks_by_date`;
    const headers = getRequestHeaders();
    const params = {
      network: networkToQuery,
      date: timestamp,
    };

    try {
      const response = await axios.get(url, {
        params,
        headers,
      });

      if (!response || !response.data || response.data.length == 0) {
        this.context
          .getLogger()
          .error(
            `Error with getBlockFromTimestamp. params: ${JSON.stringify(params)}. stacktrace: ${new Error().stack}`,
          );
        return null;
      }

      return Math.max(...response.data);
    } catch (e) {
      const msg = generateAxiosErrorMessage('getBlockFromTimestamp', url, e, params);
      this.context.getLogger().error(msg);
      throw e;
    }
  }

  private async getDateByBlockAt(blockNumber: number) {
    // when blockNumber parameter is 0, we fetch the latest timestamp so we don't cache the result
    const cacheDuration = blockNumber == 0 ? CacheDuration.NO_CACHE : CacheDuration.SHORT_CACHE_DURATION;
    const network = this.context.getNetwork();
    // TODO: use APAxios
    // const axios = await this.context.getAxios(cacheDuration);
    const url = this.baseUrl + `/api/date_by_block`;
    const headers = getRequestHeaders();
    const params = {
      network: network,
      block: blockNumber,
    };

    try {
      const response = await axios.get(url, {
        params,
        headers,
      });

      if (!response || !response.data) {
        this.context
          .getLogger()
          .error(
            `Invalid response with getDateByBlockAt. params: ${JSON.stringify(params)}. stacktrace: ${
              new Error().stack
            }`,
          );
        return null;
      }

      return response.data;
    } catch (e) {
      const msg = generateAxiosErrorMessage('getDateByBlockAt', url, e, params);
      this.context.getLogger().error(msg);
      throw e;
    }
  }
}
