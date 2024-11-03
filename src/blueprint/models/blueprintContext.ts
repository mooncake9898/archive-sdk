import { ApAxiosManager, CacheDuration } from '../../axios';
import { AbstractLoggingContext } from '../../blueprint/common';
import { NetworkConfig } from '../../blueprint/common/config/networkConfig';
import { TokenMetadataOracle } from '../../blueprint/common/token/tokenMetadataOracle';
import { MetadataStore } from '../../blueprint/meta';
import { BlockByDateAPIInterface } from '../../blueprint/models/blockbydateAPIInterface';
import { Blueprint } from '../../blueprint/models/blueprintInterface';
import { DefiPriceAPIInterface } from '../../blueprint/models/defiPriceAPIInterface';
import { ExchangePrice } from '../../blueprint/models/exchangePrice';
import { ExternalResponseCacheService } from '../../cache';
import { AXIOS_DEFAULT_CONFIG, CHAINID } from '../../constants';
import { KafkaManager } from '../../logging';
import { EvmRPCSender } from '@src/web3-wrapper/rpc/evmRPCSender';
import { SolanaRPCSender } from '@src/web3-wrapper/rpc/solanaRPCSender';
import AsyncRedis from 'async-redis';
import { AxiosInstance } from 'axios';
import { Logger } from 'log4js';

export abstract class BlueprintContext {
  protected contractReader: any;

  networkConfig: NetworkConfig;
  protected exchangePrice: ExchangePrice;
  protected blockByDateApi: BlockByDateAPIInterface;
  protected defiPriceApi: DefiPriceAPIInterface;
  protected axiosManager: ApAxiosManager;
  protected readonly kafkaManager: KafkaManager;
  protected readonly cache: ExternalResponseCacheService;
  includeChildrenBPs: boolean | null;
  protected walletAddresses: string[];
  protected initialized: boolean = false;
  protected metadataStore: MetadataStore;
  protected childrenBPs: Blueprint[] = [];
  protected evmRpcSender: EvmRPCSender;
  protected solanaRpcSender: SolanaRPCSender;

  public constructor(
    protected blueprintKey: string,
    protected networkId: number | string,
    protected loggingContext: AbstractLoggingContext,
    metadataStore: MetadataStore,
    defiPriceApi?: DefiPriceAPIInterface,
    blockByDateApi?: BlockByDateAPIInterface,
  ) {
    this.cache = loggingContext.getCache();
    this.kafkaManager = KafkaManager.getInstance();
    this.metadataStore = metadataStore;
    this.defiPriceApi = defiPriceApi;
    this.blockByDateApi = blockByDateApi;
  }

  public setBlockByDateApi(blockByDateApi: BlockByDateAPIInterface) {
    this.blockByDateApi = blockByDateApi;
  }

  public getBlockByDateApi(): BlockByDateAPIInterface {
    return this.blockByDateApi;
  }

  public getLogger(): Logger {
    const logger = this.loggingContext.getLogger(this.blueprintKey);
    return logger;
  }

  public getDefiPriceAPI(): DefiPriceAPIInterface {
    return this.defiPriceApi;
  }

  public setDefiPriceAPI(defiPriceApi: DefiPriceAPIInterface) {
    this.defiPriceApi = defiPriceApi;
  }

  private checkNetworkConfig(): void {
    if (!this.networkConfig) {
      throw new Error('Network config is not set');
    }
  }

  public getNetwork(): number {
    this.checkNetworkConfig();
    return this.networkConfig.getNetwork();
  }

  public getNetworkConfig(): NetworkConfig {
    return this.networkConfig;
  }

  public getBlueprintKey(): string {
    return this.blueprintKey;
  }

  public getChildrenBlueprints(): Blueprint[] {
    return this.includeChildrenBPs ? this.childrenBPs : [];
  }

  public getWalletAddresses(): string[] {
    return this.walletAddresses || [];
  }

  public getExchangePrice() {
    if (this.exchangePrice == null) {
      this.exchangePrice = new ExchangePrice(this);
    }
    return this.exchangePrice;
  }

  public generateCacheKey(prefix: string, composedKey: string): string {
    return `${prefix}_${composedKey}_${this.getNetwork()}`;
  }

  public async cacheOrPerform(cacheKey, ttl, onCacheMiss) {
    return this.cache.cacheOrPerform(this.getNetwork().toString(), cacheKey, ttl, onCacheMiss);
  }

  /**
   * Gets the raw cache, bypassing the prefix keys we add for context aware
   */
  public getRestClient(): AsyncRedis {
    return this.cache.getRestClient();
  }

  public getGasOracle() {
    this.checkNetworkConfig();
    return this.networkConfig.getGasOracle(this);
  }

  public getTokenMetadataOracle(): TokenMetadataOracle {
    this.checkNetworkConfig();
    return this.networkConfig.getTokenMetadataOracle(this);
  }

  public getBlockTimeOracle() {
    this.checkNetworkConfig();
    return this.networkConfig.getBlockTimeOracle(this);
  }

  public getAxios(cacheDuration = CacheDuration.NO_CACHE): AxiosInstance {
    const axiosManager = this.getAxiosManager();
    const axios = axiosManager.cacheToAxiosInstance.get(cacheDuration);
    // add the request header here for any downstream services
    axios.defaults.headers.common['X-Request-ID'] = this.loggingContext.requestId;
    axios.defaults.maxRedirects = 0; // Set to 0 to prevent automatic redirects
    // we call this.getLogger() to set requestId to kafka extras log
    this.getLogger();
    return axios;
  }

  public getAxiosManager() {
    if (!this.axiosManager) {
      this.initAxiosManager();
    }

    this.axiosManager.setRequestId(this.getRequestId());
    return this.axiosManager;
  }

  public getRequestId(): string {
    return this.loggingContext.requestId;
  }

  public getMetadataStore(): MetadataStore {
    return this.metadataStore;
  }

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

  private setWalletAddresses(wallets: string[]): void {
    this.walletAddresses =
      this.getNetwork() == Number(CHAINID.SOLANA) ? wallets : wallets.map((wallet) => wallet.toLowerCase());
  }

  private setIncludeChildrenBlueprints(includeChildrenBlueprints: boolean): void {
    this.includeChildrenBPs = includeChildrenBlueprints;
  }

  private initAxiosManager() {
    if (!this.axiosManager) {
      this.axiosManager = new ApAxiosManager(
        this.blueprintKey,
        this.kafkaManager as any,
        this.loggingContext.requestId,
      );
    }
    this.axiosManager.setup(AXIOS_DEFAULT_CONFIG);
  }

  setChildrenBlueprints(childrenBlueprints: Blueprint[]) {
    this.childrenBPs = childrenBlueprints;
  }

  abstract setNetworkConfig(networkId): NetworkConfig;
  abstract getComposedBlueprintKey(): string | null;
  abstract getContractReaderByNetwork(network: number | string);
  abstract getContractReader();
  abstract getConfigService();
  abstract getEvmRpcSender(): EvmRPCSender;
  abstract getSolanaRpcSender(): SolanaRPCSender;
}
