import { AvailableNetwork } from './config/availableNetwork';
import { NetworkConfig } from './config/networkConfig';
import { VisionCache } from './visionCache';
export declare class RequestContext {
    private readonly cache;
    private requestId;
    private realTimePriceMode;
    private networkConfig;
    private readonly logger;
    constructor(networkId: number | string, cache: VisionCache, requestId: string);
    getRequestId(): string;
    private static setNetworkConfig;
    getNetwork(): AvailableNetwork;
    getNetworkConfig(): NetworkConfig;
    /**
     * Gets the contract reader for a particular pool provider. If no pool provider, then will return the regular ContractReader
     * @param poolProviderKey
     */
    getVisionCache(): VisionCache;
    cacheOrPerform(cacheKey: any, ttl: any, onCacheMiss: any): Promise<any>;
    logError(msg: any): void;
    logWarn(msg: any): void;
}
