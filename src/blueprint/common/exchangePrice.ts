import { TokenPriceDto } from '../models/tokenPriceDto';
import { BlueprintContext } from '../models/blueprintContext';
import { NetworkConfig } from './config/networkConfig';
import { DefiPriceAPI } from './defiPriceAPI';
// import { WEVMOS_ADDRESS_EVMOS_CHAIN } from '@src/extensions/evmos_staking/constants';
import { CHAINID } from '../../constants';

export class ExchangePrice {
  
  private config: NetworkConfig;
  private priceApi: DefiPriceAPI;

  constructor(private context: BlueprintContext) {
    
    this.config = context.getNetworkConfig();
    this.priceApi = new DefiPriceAPI(context);
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

  // async fetchEvmosPrice(evmosBlockNumber: number): Promise<TokenPriceDto> {
  //   try {
  //     const priceAtBlock = await this.getGenericPriceOfAt(WEVMOS_ADDRESS_EVMOS_CHAIN, evmosBlockNumber);
  //     if (!priceAtBlock || priceAtBlock.source == '') {
  //       const msg = `Evmos price could not be fetched for address ${WEVMOS_ADDRESS_EVMOS_CHAIN} and block ${evmosBlockNumber}. response: ${JSON.stringify(
  //         priceAtBlock,
  //       )}`;
  //       this.context.getLogger().error(msg);

  //       return new TokenPriceDto(0, '', 0);
  //     }
  //     return priceAtBlock;
  //   } catch (error) {
  //     this.context.getLogger().error(`Error fetching Evmos price: ${error}`);

  //     return new TokenPriceDto(0, '', 0);
  //   }
  // }

  /*
   * Returns the price of ETH on ethereum network at 'timestamp'
   */
  async getETHPriceAt(timestamp: number): Promise<TokenPriceDto> {
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
