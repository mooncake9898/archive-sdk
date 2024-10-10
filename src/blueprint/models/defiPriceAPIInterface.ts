import { TokenPriceDto } from '../../blueprint/models/tokenPriceDto';

export interface DefiPriceAPIInterface {
  getLpPriceAt(tokenAddrs: string, poolProviderKey: string, block?: number): Promise<TokenPriceDto>;
  getPriceOf(tokenAddrs: string, poolProviderKey: string, block?: number): Promise<TokenPriceDto>;
  getGenericLpPrice(tokenAddrs: string, block?: number): Promise<number>;
  getGenericPrice(tokenAddrs: string, block?: number): Promise<TokenPriceDto>;
  getBaseGasTokenPrice(blockNumber: number): Promise<number>;
  getBTCPriceAt(blockNumber: number): Promise<TokenPriceDto>;
  getETHPriceAt(blockNumber: number): Promise<TokenPriceDto>;
}
