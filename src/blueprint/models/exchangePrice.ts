import { BlueprintContext } from '../../blueprint/models/blueprintContext';
import { DefiPriceAPIInterface } from '../../blueprint/models/defiPriceAPIInterface';
import { TokenPriceDto } from '../../blueprint/models/tokenPriceDto';
import { CHAINID } from '../../constants';

export class ExchangePrice {
  private priceApi: DefiPriceAPIInterface;

  constructor(private context: BlueprintContext) {
    this.priceApi = context.getDefiPriceAPI();
  }

  /**
   * Will try to get the price of a token without a pool provider key
   */
  async getGenericPriceOfAt(tokenAddress, block): Promise<TokenPriceDto> {
    return this.priceApi.getGenericPrice(tokenAddress, block);
  }

  async getPriceOfAt(tokenAddress: string, poolProviderKey: string, block: number): Promise<TokenPriceDto> {
    return await this.priceApi.getPriceOf(tokenAddress, poolProviderKey, block);
  }

  async getReceiptTokenPriceAt(tokenAddress: string, poolProviderKey, blockNumber = 0): Promise<TokenPriceDto> {
    return await this.priceApi.getLpPriceAt(tokenAddress, poolProviderKey, blockNumber);
  }

  async getBaseGasTokenPrice(blockNumber: number): Promise<number> {
    return this.priceApi.getBaseGasTokenPrice(blockNumber);
  }

  /*
   * Returns the price of ETH on ethereum network at 'timestamp'
   */
  async getETHPriceAt(timestamp: number): Promise<TokenPriceDto> {
    if (timestamp === 0) {
      return this.priceApi.getETHPriceAt(0);
    }
    const timestampInSeconds = this.convertTimestampToSeconds(timestamp);
    const blockNumber = await this.context
      .getBlockByDateApi()
      .getBlockFromTimestamp(timestampInSeconds, String(CHAINID.ETHEREUM));
    return this.priceApi.getETHPriceAt(blockNumber);
  }

  /*
   * Returns the price of BTC on ethereum network at 'timestamp'
   */
  async getBTCPriceAt(timestamp: number): Promise<TokenPriceDto> {
    if (timestamp === 0) {
      return this.priceApi.getBTCPriceAt(0);
    }
    const timestampInSeconds = this.convertTimestampToSeconds(timestamp);
    const blockNumber = await this.context
      .getBlockByDateApi()
      .getBlockFromTimestamp(timestampInSeconds, String(CHAINID.ETHEREUM));
    return this.priceApi.getBTCPriceAt(blockNumber);
  }

  private convertTimestampToSeconds(timestamp: number): number {
    // ToDo - AP-806
    // We convert timestamp to seconds since issues arise when block-by-date is storing ms timestamps (AP-806)
    const timestampInSeconds = timestamp.toString().length === 13 ? Math.floor(timestamp / 1000) : timestamp;
    return timestampInSeconds;
  }
}
