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
exports.RequestContext = void 0;
const arbitrumNetworkConfig_1 = require("./config/arbitrumNetworkConfig");
const auroraNetworkConfig_1 = require("./config/auroraNetworkConfig");
const availableNetwork_1 = require("./config/availableNetwork");
const avaxNetworkConfig_1 = require("./config/avaxNetworkConfig");
const baseNetworkConfig_1 = require("./config/baseNetworkConfig");
const bscNetworkConfig_1 = require("./config/bscNetworkConfig");
const celoNetworkConfig_1 = require("./config/celoNetworkConfig");
const ethereumNetworkConfig_1 = require("./config/ethereumNetworkConfig");
const fantomNetworkConfig_1 = require("./config/fantomNetworkConfig");
const harmonyNetworkConfig_1 = require("./config/harmonyNetworkConfig");
const maticNetworkConfig_1 = require("./config/maticNetworkConfig");
const optimismNetworkConfig_1 = require("./config/optimismNetworkConfig");
const roninNetworkConfig_1 = require("./config/roninNetworkConfig");
const xdaiNetworkConfig_1 = require("./config/xdaiNetworkConfig");
const common_1 = require("@nestjs/common");
class RequestContext {
    constructor(networkId, cache, requestId) {
        this.cache = cache;
        this.requestId = requestId;
        this.realTimePriceMode = false; // set this to false by default
        this.networkConfig = RequestContext.setNetworkConfig(Number(networkId));
        this.logger = new common_1.Logger(RequestContext.name);
    }
    getRequestId() {
        return this.requestId;
    }
    static setNetworkConfig(networkId) {
        switch (networkId) {
            case availableNetwork_1.AvailableNetwork.ETHEREUM:
                return new ethereumNetworkConfig_1.EthereumNetworkConfig();
            case availableNetwork_1.AvailableNetwork.MATIC:
                return new maticNetworkConfig_1.MaticNetworkConfig();
            case availableNetwork_1.AvailableNetwork.ARBITRUM:
                return new arbitrumNetworkConfig_1.ArbitrumNetworkConfig();
            case availableNetwork_1.AvailableNetwork.FANTOM:
                return new fantomNetworkConfig_1.FantomNetworkConfig();
            case availableNetwork_1.AvailableNetwork.AVAX:
                return new avaxNetworkConfig_1.AvaxNetworkConfig();
            case availableNetwork_1.AvailableNetwork.HARMONY:
                return new harmonyNetworkConfig_1.HarmonyNetworkConfig();
            case availableNetwork_1.AvailableNetwork.XDAI:
                return new xdaiNetworkConfig_1.XdaiNetworkConfig();
            case availableNetwork_1.AvailableNetwork.OPTIMISM:
                return new optimismNetworkConfig_1.OptimismNetworkConfig();
            case availableNetwork_1.AvailableNetwork.RONIN:
                return new roninNetworkConfig_1.RoninNetworkConfig();
            case availableNetwork_1.AvailableNetwork.CELO:
                return new celoNetworkConfig_1.CeloNetworkConfig();
            case availableNetwork_1.AvailableNetwork.BSC:
                return new bscNetworkConfig_1.BscNetworkConfig();
            case availableNetwork_1.AvailableNetwork.AURORA:
                return new auroraNetworkConfig_1.AuroraNetworkConfig();
            case availableNetwork_1.AvailableNetwork.BASE:
                return new baseNetworkConfig_1.BaseNetworkConfig();
            default:
                throw 'Unable to determine network config -- please check!!!';
        }
    }
    getNetwork() {
        return this.networkConfig.getNetwork();
    }
    getNetworkConfig() {
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
    getVisionCache() {
        return this.cache;
    }
    cacheOrPerform(cacheKey, ttl, onCacheMiss) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.cacheOrPerform(this, cacheKey, ttl, onCacheMiss);
        });
    }
    logError(msg) {
        this.logger.error(msg);
    }
    logWarn(msg) {
        this.logger.warn(msg);
    }
}
exports.RequestContext = RequestContext;
//# sourceMappingURL=requestContext.js.map