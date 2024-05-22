import { BlueprintContext } from '../models/blueprintContext';
import { BTC_ADDRESS_MAINNET, ETH_ADDRESS_MAINNET } from '../models/constants';
import { TokenPriceDto } from '../models/tokenPriceDto';
import { generateAxiosErrorMessage, getRequestHeaders } from './requestUtils';
// import { transformProviderKey } from '@src/common/lib/utils';
import { CacheDuration } from '@src/axios';
import axios from 'axios';

export class DefiPriceAPI {
  private baseUrl: string;

  constructor(private context: BlueprintContext) {
    // TODO: override default value
    // this.baseUrl = context.getConfigService().get<string>('DEFI_PRICE_BASE_URL');
    this.baseUrl = 'https://price.archiveprotocol.com';
  }

  async getLpPriceAt(tokenAddrs: string, poolProviderKey: string, block = 0): Promise<TokenPriceDto> {
    const priceDto = await this.callPriceApi(this.context.getNetwork(), tokenAddrs, block, 1, poolProviderKey);
    return priceDto;
  }

  async getPriceOf(tokenAddrs: string, poolProviderKey: string, block = 0): Promise<TokenPriceDto> {
    return this.callPriceApi(this.context.getNetwork(), tokenAddrs, block, 0, poolProviderKey);
  }

  /**
   * We don't know anything about this token, so let the service handle it (though this is much slower since
   * it has to try to look up the token).
   */
  async getGenericLpPrice(tokenAddrs: string, block = 0): Promise<number> {
    const priceObj = await this.callPriceApi(this.context.getNetwork(), tokenAddrs, block, 1);
    return priceObj?.price ?? 0;
  }

  /**
   * We don't know anything about this token, so let the service handle it (though this is much slower since
   * it has to try to look up the token).
   */
  async getGenericPrice(tokenAddrs: string, block = 0): Promise<TokenPriceDto> {
    return this.callPriceApi(this.context.getNetwork(), tokenAddrs, block);
  }

  async getBaseGasTokenPrice(blockNumber: number): Promise<number> {
    // when blockNumber parameter is 0, we fetch the latest timestamp so we don't cache the result
    const cacheDuration = blockNumber == 0 ? CacheDuration.NO_CACHE : CacheDuration.SHORT_CACHE_DURATION;
    const network = this.context.getNetwork();
    // TODO: use APAxios
    // const axios = await this.context.getAxios(cacheDuration);
    const url = this.baseUrl + `/networkGasTokenPrice/${network}/${blockNumber}`;

    const config = {
      headers: getRequestHeaders(),
    };

    try {
      const response = await axios.get(url, config);

      if (!response || !response.data) {
        this.context
          .getLogger()
          .error(
            `Invalid response with getBaseGasTokenPrice. blockNumber: ${blockNumber} on network ${network}. stacktrace: ${
              new Error().stack
            }`,
          );
        return 0;
      }

      return response.data.price;
    } catch (e) {
      const msg = generateAxiosErrorMessage('getBaseGasTokenPrice', url, e);
      this.context.getLogger().error(msg);
      return 0;
    }
  }

  async getBTCPriceAt(blockNumber: number): Promise<TokenPriceDto> {
    return this.callPriceApi(1, BTC_ADDRESS_MAINNET, blockNumber, 0);
  }

  async getETHPriceAt(blockNumber: number): Promise<TokenPriceDto> {
    return this.callPriceApi(1, ETH_ADDRESS_MAINNET, blockNumber, 0);
  }

  private async callPriceApi(
    networkId: number,
    tokenAddrs: string,
    block = 0,
    type?: number,
    poolProviderKey?: string,
  ): Promise<TokenPriceDto> {
    if (block == null) {
      this.context
        .getLogger()
        .error(
          `block parameter is null in callPriceApi(). networkId: ${networkId}, tokenAddrs: ${tokenAddrs}, type: ${type}, poolProviderKey: ${poolProviderKey}. stacktrace: ${
            new Error().stack
          }`,
        );
    }

    // when block parameter is 0, we fetch the latest timestamp so we don't cache the result
    const cacheDuration = block == 0 ? CacheDuration.NO_CACHE : CacheDuration.SHORT_CACHE_DURATION;
    // TODO: use APAxios
    // const axios = await this.context.getAxios(cacheDuration);
    const url = this.baseUrl + `/priceByBlock/${networkId}/${tokenAddrs}/${block}`;
    const params = {
      type: type,
      // source: transformProviderKey(poolProviderKey),
      source: poolProviderKey,
    };

    const headers = getRequestHeaders();

    try {
      const response = await axios.get(url, {
        params,
        headers,
      });
      if (!response || !response.data) {
        this.context
          .getLogger()
          .error(
            `Invalid response with callPriceApi. url: ${url}, params: ${JSON.stringify(params)}. stacktrace: ${
              new Error().stack
            }`,
          );
        return new TokenPriceDto(0, '', -1);
      }

      return new TokenPriceDto(response.data.price, response.data.source, response.data.tokenType);
    } catch (e) {
      const msg = generateAxiosErrorMessage('callPriceApi', url, e, params);
      this.context.getLogger().error(msg);
      return new TokenPriceDto(0, '', -1);
    }
  }
}
