"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlueprintContext = void 0;
const blockbydateAPI_1 = require("../common/blockbydateAPI");
const arbitrumNetworkConfig_1 = require("../common/config/arbitrumNetworkConfig");
const auroraNetworkConfig_1 = require("../common/config/auroraNetworkConfig");
const avaxNetworkConfig_1 = require("../common/config/avaxNetworkConfig");
const baseNetworkConfig_1 = require("../common/config/baseNetworkConfig");
const bscNetworkConfig_1 = require("../common/config/bscNetworkConfig");
const celoNetworkConfig_1 = require("../common/config/celoNetworkConfig");
const ethereumNetworkConfig_1 = require("../common/config/ethereumNetworkConfig");
const evmosEvmNetworkConfig_1 = require("../common/config/evmosEvmNetworkConfig");
const fantomNetworkConfig_1 = require("../common/config/fantomNetworkConfig");
const harmonyNetworkConfig_1 = require("../common/config/harmonyNetworkConfig");
const maticNetworkConfig_1 = require("../common/config/maticNetworkConfig");
const mumbaiNetworkConfig_1 = require("../common/config/mumbaiNetworkConfig");
const optimismNetworkConfig_1 = require("../common/config/optimismNetworkConfig");
const xdaiNetworkConfig_1 = require("../common/config/xdaiNetworkConfig");
const exchangePrice_1 = require("../common/exchangePrice");
const constants_1 = require("../../constants");
const solanaNetworkConfig_1 = require("../common/config/solanaNetworkConfig");
class BlueprintContext {
    constructor(blueprintKey, networkId, loggingContext) {
        this.blueprintKey = blueprintKey;
        this.networkId = networkId;
        this.loggingContext = loggingContext;
        this.initialized = false;
        this.networkConfig = this.setNetworkConfig(networkId);
        // this.configService = loggingContext.getConfigService();
        // this.cache = loggingContext.getCache();
        this.blockByDateApi = new blockbydateAPI_1.BlockbydateAPI(this);
        // this.kafkaManager = KafkaManager.getInstance();
    }
    static buildWithBlueprintId(
    // blueprintKey: BlueprintKey | string,
    blueprintKey, networkId, loggingContext) {
        return new BlueprintContext(blueprintKey, networkId, loggingContext);
    }
    getBlockByDateApi() {
        return this.blockByDateApi;
    }
    getLogger() {
        const logger = this.loggingContext.getLogger(this.blueprintKey);
        return logger;
    }
    getNetwork() {
        return this.networkConfig.getNetwork();
    }
    getNetworkConfig() {
        return this.networkConfig;
    }
    setNetworkConfig(networkId) {
        switch (String(networkId)) {
            case constants_1.CHAINID.ETHEREUM:
                return new ethereumNetworkConfig_1.EthereumNetworkConfig();
            case constants_1.CHAINID.MATIC:
                return new maticNetworkConfig_1.MaticNetworkConfig();
            case constants_1.CHAINID.FANTOM:
                return new fantomNetworkConfig_1.FantomNetworkConfig();
            case constants_1.CHAINID.BSC:
                return new bscNetworkConfig_1.BscNetworkConfig();
            case constants_1.CHAINID.CELO:
                return new celoNetworkConfig_1.CeloNetworkConfig();
            case constants_1.CHAINID.AVAX:
                return new avaxNetworkConfig_1.AvaxNetworkConfig();
            case constants_1.CHAINID.XDAI:
                return new xdaiNetworkConfig_1.XdaiNetworkConfig();
            case constants_1.CHAINID.ARBITRUM:
                return new arbitrumNetworkConfig_1.ArbitrumNetworkConfig();
            case constants_1.CHAINID.HARMONY:
                return new harmonyNetworkConfig_1.HarmonyNetworkConfig();
            case constants_1.CHAINID.OPTIMISM:
                return new optimismNetworkConfig_1.OptimismNetworkConfig();
            case constants_1.CHAINID.MUMBAI:
                return new mumbaiNetworkConfig_1.MumbaiNetworkConfig();
            case constants_1.CHAINID.SOLANA:
                return new solanaNetworkConfig_1.SolanaNetworkConfig();
            case constants_1.CHAINID.AURORA:
                return new auroraNetworkConfig_1.AuroraNetworkConfig();
            case constants_1.CHAINID.EVMOS:
                return new evmosEvmNetworkConfig_1.EvmosEvmNetworkConfig();
            // case CHAINID.EVMOS_COSMOS:
            //   return new EvmosCosmosNetworkConfig();
            case constants_1.CHAINID.BASE:
                return new baseNetworkConfig_1.BaseNetworkConfig();
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
    getExchangePrice() {
        if (this.exchangePrice == null) {
            this.exchangePrice = new exchangePrice_1.ExchangePrice(this);
        }
        return this.exchangePrice;
    }
    generateCacheKey(prefix, composedKey) {
        return `${prefix}_${composedKey}_${this.getNetwork()}`;
    }
    getGasOracle() {
        return this.networkConfig.getGasOracle(this);
    }
    getTokenMetadataOracle() {
        return this.networkConfig.getTokenMetadataOracle(this);
    }
    getRequestId() {
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
    getWalletAddresses() {
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
    initialize(wallets, includeChildrenBlueprints = false) {
        if (this.isInitialized()) {
            throw new Error('BlueprintContext is already initialized');
        }
        this.setIncludeChildrenBlueprints(includeChildrenBlueprints);
        this.setWalletAddresses(wallets);
        this.initialized = true;
    }
    isInitialized() {
        return this.initialized;
    }
    setIncludeChildrenBlueprints(includeChildrenBlueprints) {
        this.includeChildrenBPs = includeChildrenBlueprints;
    }
    setWalletAddresses(wallets) {
        this.walletAddresses =
            this.getNetwork() == Number(constants_1.CHAINID.SOLANA) ? wallets : wallets.map((wallet) => wallet.toLowerCase());
    }
}
exports.BlueprintContext = BlueprintContext;
//# sourceMappingURL=blueprintContext.js.map