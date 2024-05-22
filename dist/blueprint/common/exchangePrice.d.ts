import { TokenPriceDto } from '../models/tokenPriceDto';
import { BlueprintContext } from '../models/blueprintContext';
export declare class ExchangePrice {
    private context;
    private config;
    private priceApi;
    constructor(context: BlueprintContext);
    /**
     * Will try to get the price of a token without a pool provider key
     */
    getGenericPriceOfAt(tokenAddress: any, block: any): Promise<TokenPriceDto>;
    getPriceOfAt(tokenAddress: string, poolProviderKey: string, block: number): Promise<TokenPriceDto>;
    getReceiptTokenPriceAt(tokenAddress: string, poolProviderKey: any, blockNumber?: number): Promise<TokenPriceDto>;
    getBaseGasTokenPrice(blockNumber: number): Promise<number>;
    getETHPriceAt(timestamp: number): Promise<TokenPriceDto>;
    getBTCPriceAt(timestamp: number): Promise<TokenPriceDto>;
    private convertTimestampToSeconds;
}
