"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlueprintContext = void 0;
const axios_1 = require("../../axios");
const exchangePrice_1 = require("../../blueprint/models/exchangePrice");
const constants_1 = require("../../constants");
const logging_1 = require("../../logging");
class BlueprintContext {
    constructor(blueprintKey, networkId, loggingContext, metadataStore, defiPriceApi, blockByDateApi) {
        this.blueprintKey = blueprintKey;
        this.networkId = networkId;
        this.loggingContext = loggingContext;
        this.initialized = false;
        this.childrenBPs = [];
        this.cache = loggingContext.getCache();
        this.kafkaManager = logging_1.KafkaManager.getInstance();
        this.metadataStore = metadataStore;
        this.defiPriceApi = defiPriceApi;
        this.blockByDateApi = blockByDateApi;
    }
    setBlockByDateApi(blockByDateApi) {
        this.blockByDateApi = blockByDateApi;
    }
    getBlockByDateApi() {
        return this.blockByDateApi;
    }
    getLogger() {
        const logger = this.loggingContext.getLogger(this.blueprintKey);
        return logger;
    }
    getDefiPriceAPI() {
        return this.defiPriceApi;
    }
    setDefiPriceAPI(defiPriceApi) {
        this.defiPriceApi = defiPriceApi;
    }
    checkNetworkConfig() {
        if (!this.networkConfig) {
            throw new Error('Network config is not set');
        }
    }
    getNetwork() {
        this.checkNetworkConfig();
        return this.networkConfig.getNetwork();
    }
    getNetworkConfig() {
        return this.networkConfig;
    }
    getBlueprintKey() {
        return this.blueprintKey;
    }
    getChildrenBlueprints() {
        return this.includeChildrenBPs ? this.childrenBPs : [];
    }
    getWalletAddresses() {
        return this.walletAddresses || [];
    }
    getExchangePrice() {
        if (this.exchangePrice == null) {
            this.exchangePrice = new exchangePrice_1.ExchangePrice(this);
        }
        return this.exchangePrice;
    }
    generateCacheKey(prefix, composedKey) {
        return `${prefix}_${composedKey}_${this.getNetwork()}`;
    }
    cacheOrPerform(cacheKey, ttl, onCacheMiss) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.cacheOrPerform(this.getNetwork().toString(), cacheKey, ttl, onCacheMiss);
        });
    }
    /**
     * Gets the raw cache, bypassing the prefix keys we add for context aware
     */
    getRestClient() {
        return this.cache.getRestClient();
    }
    getGasOracle() {
        this.checkNetworkConfig();
        return this.networkConfig.getGasOracle(this);
    }
    getTokenMetadataOracle() {
        this.checkNetworkConfig();
        return this.networkConfig.getTokenMetadataOracle(this);
    }
    getBlockTimeOracle() {
        this.checkNetworkConfig();
        return this.networkConfig.getBlockTimeOracle(this);
    }
    getAxios(cacheDuration = axios_1.CacheDuration.NO_CACHE) {
        const axiosManager = this.getAxiosManager();
        const axios = axiosManager.cacheToAxiosInstance.get(cacheDuration);
        // add the request header here for any downstream services
        axios.defaults.headers.common['X-Request-ID'] = this.loggingContext.requestId;
        axios.defaults.maxRedirects = 0; // Set to 0 to prevent automatic redirects
        // we call this.getLogger() to set requestId to kafka extras log
        this.getLogger();
        return axios;
    }
    getAxiosManager() {
        if (!this.axiosManager) {
            this.initAxiosManager();
        }
        this.axiosManager.setRequestId(this.getRequestId());
        return this.axiosManager;
    }
    getRequestId() {
        return this.loggingContext.requestId;
    }
    getMetadataStore() {
        return this.metadataStore;
    }
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
    setWalletAddresses(wallets) {
        this.walletAddresses =
            this.getNetwork() == Number(constants_1.CHAINID.SOLANA) ? wallets : wallets.map((wallet) => wallet.toLowerCase());
    }
    setIncludeChildrenBlueprints(includeChildrenBlueprints) {
        this.includeChildrenBPs = includeChildrenBlueprints;
    }
    initAxiosManager() {
        if (!this.axiosManager) {
            this.axiosManager = new axios_1.ApAxiosManager(this.blueprintKey, this.kafkaManager, this.loggingContext.requestId);
        }
        this.axiosManager.setup(constants_1.AXIOS_DEFAULT_CONFIG);
    }
    setChildrenBlueprints(childrenBlueprints) {
        this.childrenBPs = childrenBlueprints;
    }
}
exports.BlueprintContext = BlueprintContext;
//# sourceMappingURL=blueprintContext.js.map