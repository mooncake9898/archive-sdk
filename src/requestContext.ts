import { ArbitrumNetworkConfig } from './config/arbitrumNetworkConfig';
import { AuroraNetworkConfig } from './config/auroraNetworkConfig';
import { AvailableNetwork } from './config/availableNetwork';
import { AvaxNetworkConfig } from './config/avaxNetworkConfig';
import { BaseNetworkConfig } from './config/baseNetworkConfig';
import { BscNetworkConfig } from './config/bscNetworkConfig';
import { CeloNetworkConfig } from './config/celoNetworkConfig';
import { EthereumNetworkConfig } from './config/ethereumNetworkConfig';
import { FantomNetworkConfig } from './config/fantomNetworkConfig';
import { HarmonyNetworkConfig } from './config/harmonyNetworkConfig';
import { MaticNetworkConfig } from './config/maticNetworkConfig';
import { NetworkConfig } from './config/networkConfig';
import { OptimismNetworkConfig } from './config/optimismNetworkConfig';
import { RoninNetworkConfig } from './config/roninNetworkConfig';
import { XdaiNetworkConfig } from './config/xdaiNetworkConfig';
// import { ContractReader } from './contractreader/contractReader';
import { VisionCache } from './visionCache';
import { Logger } from '@nestjs/common';

export class RequestContext {
  // private contractReader: ContractReader;
  private realTimePriceMode: boolean;
  private networkConfig: NetworkConfig;
  private readonly logger;

  constructor(
    networkId: number | string,
    private readonly cache: VisionCache,
    private requestId: string,
  ) {
    this.realTimePriceMode = false; // set this to false by default
    this.networkConfig = RequestContext.setNetworkConfig(Number(networkId));
    this.logger = new Logger(RequestContext.name);
  }

  public getRequestId() {
    return this.requestId;
  }

  private static setNetworkConfig(networkId): NetworkConfig {
    switch (networkId) {
      case AvailableNetwork.ETHEREUM:
        return new EthereumNetworkConfig();
      case AvailableNetwork.MATIC:
        return new MaticNetworkConfig();
      case AvailableNetwork.ARBITRUM:
        return new ArbitrumNetworkConfig();
      case AvailableNetwork.FANTOM:
        return new FantomNetworkConfig();
      case AvailableNetwork.AVAX:
        return new AvaxNetworkConfig();
      case AvailableNetwork.HARMONY:
        return new HarmonyNetworkConfig();
      case AvailableNetwork.XDAI:
        return new XdaiNetworkConfig();
      case AvailableNetwork.OPTIMISM:
        return new OptimismNetworkConfig();
      case AvailableNetwork.RONIN:
        return new RoninNetworkConfig();
      case AvailableNetwork.CELO:
        return new CeloNetworkConfig();
      case AvailableNetwork.BSC:
        return new BscNetworkConfig();
      case AvailableNetwork.AURORA:
        return new AuroraNetworkConfig();
      case AvailableNetwork.BASE:
        return new BaseNetworkConfig();
      default:
        throw 'Unable to determine network config -- please check!!!';
    }
  }

  getNetwork(): AvailableNetwork {
    return this.networkConfig.getNetwork();
  }

  getNetworkConfig(): NetworkConfig {
    return this.networkConfig;
  }

  /**
   * Gets the contract reader for a particular pool provider. If no pool provider, then will return the regular ContractReader
   * @param poolProviderKey
   */
  // getContractReader() {
  //   this.contractReader = this.contractReader || new ContractReader(this);
  //   return this.contractReader;
  // }

  getVisionCache(): VisionCache {
    return this.cache;
  }

  async cacheOrPerform(cacheKey, ttl, onCacheMiss) {
    return this.cache.cacheOrPerform(this, cacheKey, ttl, onCacheMiss);
  }

  logError(msg) {
    this.logger.error(msg);
  }

  logWarn(msg) {
    this.logger.warn(msg);
  }
}
