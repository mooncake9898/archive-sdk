import { AbstractLoggingContext } from '../common/abstractLoggingContext.service';
import { BlockbydateAPI } from '../common/blockbydateAPI';
import { ArbitrumNetworkConfig } from '../common/config/arbitrumNetworkConfig';
import { AuroraNetworkConfig } from '../common/config/auroraNetworkConfig';
import { AvaxNetworkConfig } from '../common/config/avaxNetworkConfig';
import { BaseNetworkConfig } from '../common/config/baseNetworkConfig';
import { BscNetworkConfig } from '../common/config/bscNetworkConfig';
import { CeloNetworkConfig } from '../common/config/celoNetworkConfig';
import { EthereumNetworkConfig } from '../common/config/ethereumNetworkConfig';
import { EvmosEvmNetworkConfig } from '../common/config/evmosEvmNetworkConfig';
import { FantomNetworkConfig } from '../common/config/fantomNetworkConfig';
import { HarmonyNetworkConfig } from '../common/config/harmonyNetworkConfig';
import { MaticNetworkConfig } from '../common/config/maticNetworkConfig';
import { MumbaiNetworkConfig } from '../common/config/mumbaiNetworkConfig';
import { NetworkConfig } from '../common/config/networkConfig';
import { OptimismNetworkConfig } from '../common/config/optimismNetworkConfig';
import { XdaiNetworkConfig } from '../common/config/xdaiNetworkConfig';
import { ExchangePrice } from '../common/exchangePrice';
import { TokenMetadataOracle } from './tokenMetadataOracle';
import { CHAINID } from '../../constants';
import { ApAxiosManager, CacheDuration } from '../../axios';
import { AxiosInstance } from 'axios';
import { config } from 'dotenv';
import { Logger } from 'log4js';
import { SolanaNetworkConfig } from '../common/config/solanaNetworkConfig';

export class BlueprintContext {
  private exchangePrice: ExchangePrice;
  private readonly networkConfig: NetworkConfig;
  private readonly blockByDateApi: BlockbydateAPI;
  private axiosManager: ApAxiosManager;
  // private readonly kafkaManager: KafkaManager;
  // private readonly cache: VisionCache;
  // private readonly configService: ConfigService;
  // private contractReader: EvmContractReader | SolanaContractReader | EvmosCosmosContractReader | AuroraContractReader;
  private includeChildrenBPs: boolean | null;
  private walletAddresses: string[];
  private initialized: boolean = false;

  public constructor(
    private blueprintKey: string,
    protected networkId: number | string,
    private loggingContext: AbstractLoggingContext,
  ) {
    this.networkConfig = this.setNetworkConfig(networkId);
    // this.configService = loggingContext.getConfigService();
    // this.cache = loggingContext.getCache();
    this.blockByDateApi = new BlockbydateAPI(this);
    // this.kafkaManager = KafkaManager.getInstance();
  }

  public static buildWithBlueprintId(
    // blueprintKey: BlueprintKey | string,
    blueprintKey: string,
    networkId: number | string,
    loggingContext: AbstractLoggingContext,
  ): BlueprintContext {
    return new BlueprintContext(blueprintKey, networkId, loggingContext);
  }

  public getBlockByDateApi(): BlockbydateAPI {
    return this.blockByDateApi;
  }

  public getLogger(): Logger {
    const logger = this.loggingContext.getLogger(this.blueprintKey);
    return logger;
  }

  public getNetwork(): number {
    return this.networkConfig.getNetwork();
  }

  public getNetworkConfig(): NetworkConfig {
    return this.networkConfig;
  }

  private setNetworkConfig(networkId): NetworkConfig {
    switch (String(networkId)) {
      case CHAINID.ETHEREUM:
        return new EthereumNetworkConfig();
      case CHAINID.MATIC:
        return new MaticNetworkConfig();
      case CHAINID.FANTOM:
        return new FantomNetworkConfig();
      case CHAINID.BSC:
        return new BscNetworkConfig();
      case CHAINID.CELO:
        return new CeloNetworkConfig();
      case CHAINID.AVAX:
        return new AvaxNetworkConfig();
      case CHAINID.XDAI:
        return new XdaiNetworkConfig();
      case CHAINID.ARBITRUM:
        return new ArbitrumNetworkConfig();
      case CHAINID.HARMONY:
        return new HarmonyNetworkConfig();
      case CHAINID.OPTIMISM:
        return new OptimismNetworkConfig();
      case CHAINID.MUMBAI:
        return new MumbaiNetworkConfig();
      case CHAINID.SOLANA:
        return new SolanaNetworkConfig();
      case CHAINID.AURORA:
        return new AuroraNetworkConfig();
      case CHAINID.EVMOS:
        return new EvmosEvmNetworkConfig();
      // case CHAINID.EVMOS_COSMOS:
      //   return new EvmosCosmosNetworkConfig();
      case CHAINID.BASE:
        return new BaseNetworkConfig();
      default:
        throw 'Unable to determine network config -- please check!!!';
    }
  }

  // public async getAxiosManager(): Promise<ApAxiosManager> {
  //   if (!this.axiosManager) {
  //     await this.initAxiosManager();
  //   }
  //   return this.axiosManager;

  // }

  public getExchangePrice() {
    if (this.exchangePrice == null) {
      this.exchangePrice = new ExchangePrice(this);
    }
    return this.exchangePrice;
  }

  public generateCacheKey(prefix: string, composedKey: string): string {
    return `${prefix}_${composedKey}_${this.getNetwork()}`;
  }

  public getGasOracle() {
    return this.networkConfig.getGasOracle(this);
  }

  public getTokenMetadataOracle(): TokenMetadataOracle {
    return this.networkConfig.getTokenMetadataOracle(this);
  }

  public getRequestId(): string {
    return this.loggingContext.requestId;
  }

  // public getMetadataStore(): MetadataStore {
  //   const blueprintMetadataRepo: Repository<BlueprintMetadata> = DataSource.getRepository(BlueprintMetadata);
  //   const metaStore = new MetadataStore(blueprintMetadataRepo, this.loggingContext);
  //   return metaStore;
  // }

  // public getBlockTimeOracle() {
  //   return this.networkConfig.getBlockTimeOracle(this);
  // }

  // public getComposedBlueprintKey(): string | null {
  //   return this.includeChildrenBPs
  //     ? new ComposedBlueprintKeyGenerator(this.blueprintKey, this.loggingContext).getComposedKey()
  //     : null;
  // }

  // public getChildrenBlueprints(): Blueprint[] {
  //   return this.includeChildrenBPs
  //     ? new BlueprintRegistry(this.loggingContext).getChildrenBlueprintFromParent(this.blueprintKey)
  //     : [];
  // }

  public getWalletAddresses(): string[] {
    return this.walletAddresses || [];
  }

  //  getAxiosManager();

  // abstract cacheOrPerform(cacheKey, ttl, onCacheMiss);

  /**
   * Gets the contract reader.
   */
  // abstract getContractReader(): any;

  // abstract getCommonAPI(): any;

  // abstract getRawRedis(): AsyncRedis; // we comment this out to not worry about Redis types for the moment

  // abstract getVisionCache(): any;

  //  async getAxios(cacheDuration = CacheDuration.SHORT_CACHE_DURATION): Promise<AxiosInstance> {
  //   const axiosManager = await this.getAxiosManager();
  //   const axios = axiosManager.cacheToAxiosInstance.get(cacheDuration);
  //   // add the request header here for any downstream services
  //   axios.defaults.headers.common['X-Request-ID'] = this.loggingContext.requestId;
  //   axios.defaults.maxRedirects = 0; // Set to 0 to prevent automatic redirects
  //   return axios;
  // }

  // public async getAxiosManager() {
  //   if (!this.axiosManager) {
  //     await this.initAxiosManager();
  //   }
  //   return this.axiosManager;
  // }

  // private async initAxiosManager() {
  //   if (!this.axiosManager) {
  //     this.axiosManager = new ApAxiosManager(
  //       this.blueprintKey,
  //       this.getRestClient(),
  //       this.kafkaManager,
  //       this.loggingContext.requestId,
  //     );
  //   }
  //   await this.axiosManager.setup(AXIOS_DEFAULT_CONFIG);
  // }

  // private getContractReaderByNetwork(network: number | string) {
  //   switch (network) {
  //     case CHAINID.SOLANA:
  //       return new SolanaContractReader(this);
  //     case CHAINID.EVMOS_COSMOS:
  //       return new EvmosCosmosContractReader(
  //         BlueprintContext.buildWithBlueprintId(BlueprintKey.EVMOS_STAKING, CHAINID.EVMOS_COSMOS, this.loggingContext),
  //       );
  //     case CHAINID.AURORA:
  //       return new AuroraContractReader(
  //         BlueprintContext.buildWithBlueprintId(BlueprintKey.TRISOLARIS_AURORA, CHAINID.AURORA, this.loggingContext),
  //       );
  //     default:
  //       return new EvmContractReader(this);
  //   }
  // }

  public initialize(wallets: string[], includeChildrenBlueprints = false): void {
    if (this.isInitialized()) {
      throw new Error('BlueprintContext is already initialized');
    }
    this.setIncludeChildrenBlueprints(includeChildrenBlueprints);
    this.setWalletAddresses(wallets);
    this.initialized = true;
  }

  public isInitialized(): boolean {
    return this.initialized;
  }

  private setIncludeChildrenBlueprints(includeChildrenBlueprints: boolean): void {
    this.includeChildrenBPs = includeChildrenBlueprints;
  }

  private setWalletAddresses(wallets: string[]): void {
    this.walletAddresses =
      this.getNetwork() == Number(CHAINID.SOLANA) ? wallets : wallets.map((wallet) => wallet.toLowerCase());
  }
}
