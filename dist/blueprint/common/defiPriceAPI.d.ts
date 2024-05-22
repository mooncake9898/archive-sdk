import { BlueprintContext } from '../models/blueprintContext';
import { TokenPriceDto } from '../models/tokenPriceDto';
export declare class DefiPriceAPI {
    private context;
    private baseUrl;
    constructor(context: BlueprintContext);
    getLpPriceAt(tokenAddrs: string, poolProviderKey: string, block?: number): Promise<TokenPriceDto>;
    getPriceOf(tokenAddrs: string, poolProviderKey: string, block?: number): Promise<TokenPriceDto>;
    /**
     * We don't know anything about this token, so let the service handle it (though this is much slower since
     * it has to try to look up the token).
     */
    getGenericLpPrice(tokenAddrs: string, block?: number): Promise<number>;
    /**
     * We don't know anything about this token, so let the service handle it (though this is much slower since
     * it has to try to look up the token).
     */
    getGenericPrice(tokenAddrs: string, block?: number): Promise<TokenPriceDto>;
    getBaseGasTokenPrice(blockNumber: number): Promise<number>;
    getBTCPriceAt(blockNumber: number): Promise<TokenPriceDto>;
    getETHPriceAt(blockNumber: number): Promise<TokenPriceDto>;
    private callPriceApi;
}
