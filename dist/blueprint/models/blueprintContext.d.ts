import { AbstractLoggingContext } from '../common/abstractLoggingContext.service';
import { BlockbydateAPI } from '../common/blockbydateAPI';
import { NetworkConfig } from '../common/config/networkConfig';
import { ExchangePrice } from '../common/exchangePrice';
import { TokenMetadataOracle } from './tokenMetadataOracle';
import { Logger } from 'log4js';
export declare class BlueprintContext {
    private blueprintKey;
    protected networkId: number | string;
    private loggingContext;
    private exchangePrice;
    private readonly networkConfig;
    private readonly blockByDateApi;
    private axiosManager;
    private includeChildrenBPs;
    private walletAddresses;
    private initialized;
    constructor(blueprintKey: string, networkId: number | string, loggingContext: AbstractLoggingContext);
    static buildWithBlueprintId(blueprintKey: string, networkId: number | string, loggingContext: AbstractLoggingContext): BlueprintContext;
    getBlockByDateApi(): BlockbydateAPI;
    getLogger(): Logger;
    getNetwork(): number;
    getNetworkConfig(): NetworkConfig;
    private setNetworkConfig;
    getExchangePrice(): ExchangePrice;
    generateCacheKey(prefix: string, composedKey: string): string;
    getGasOracle(): import("../common/gas/gasOracle").GasOracle;
    getTokenMetadataOracle(): TokenMetadataOracle;
    getRequestId(): string;
    getWalletAddresses(): string[];
    /**
     * Gets the contract reader.
     */
    initialize(wallets: string[], includeChildrenBlueprints?: boolean): void;
    isInitialized(): boolean;
    private setIncludeChildrenBlueprints;
    private setWalletAddresses;
}
