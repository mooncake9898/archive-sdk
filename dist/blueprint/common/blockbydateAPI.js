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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockbydateAPI = void 0;
const requestUtils_1 = require("./requestUtils");
const axios_1 = require("@src/axios");
const axios_2 = __importDefault(require("axios"));
class BlockbydateAPI {
    constructor(context) {
        this.context = context;
        // TODO: override default value
        // this.baseUrl = context.getConfigService().get<string>('BLOCKBYDATE_API_BASE_URL');
        this.baseUrl = 'https://blockbydate.archiveprotocol.com';
    }
    // This retrieves the timestamp corresponding to the latest block
    // synced on BlockByDate for the network from context.getNetwork().
    getMostRecentTimestamp() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getTimestampFromBlock(0);
        });
    }
    getTimestampFromBlock(block) {
        return __awaiter(this, void 0, void 0, function* () {
            if (block == -1) {
                return block; // can't parse, just return it
            }
            return yield this.getDateByBlockAt(block);
        });
    }
    // This retrieves the latest block
    // synced on BlockByDate for the network from context.getNetwork().
    getMostRecentBlock() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getBlockFromTimestamp(0);
        });
    }
    getBlockFromTimestamp(timestamp, networkId) {
        return __awaiter(this, void 0, void 0, function* () {
            //we need to add the networkId to the key as well because there's
            //a usecase where we need to fetch the block from eth l1 and beacon chain of the same timestamp
            //in quick succession, which means the beacon chain block will be wrong because it'll use
            //cached version of l1 eth block
            const network = this.context.getNetwork();
            const networkToQuery = networkId ? networkId : network.toString();
            // when timestamp parameter is 0, we fetch the latest blockNumber so we don't cache the result
            const cacheDuration = timestamp == 0 ? axios_1.CacheDuration.NO_CACHE : axios_1.CacheDuration.SHORT_CACHE_DURATION;
            // TODO: use APAxios
            // const axios = await this.context.getAxios(cacheDuration);
            const url = this.baseUrl + `/api/blocks_by_date`;
            const headers = (0, requestUtils_1.getRequestHeaders)();
            const params = {
                network: networkToQuery,
                date: timestamp,
            };
            try {
                const response = yield axios_2.default.get(url, {
                    params,
                    headers,
                });
                if (!response || !response.data || response.data.length == 0) {
                    this.context
                        .getLogger()
                        .error(`Error with getBlockFromTimestamp. params: ${JSON.stringify(params)}. stacktrace: ${new Error().stack}`);
                    return null;
                }
                return Math.max(...response.data);
            }
            catch (e) {
                const msg = (0, requestUtils_1.generateAxiosErrorMessage)('getBlockFromTimestamp', url, e, params);
                this.context.getLogger().error(msg);
                throw e;
            }
        });
    }
    getDateByBlockAt(blockNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            // when blockNumber parameter is 0, we fetch the latest timestamp so we don't cache the result
            const cacheDuration = blockNumber == 0 ? axios_1.CacheDuration.NO_CACHE : axios_1.CacheDuration.SHORT_CACHE_DURATION;
            const network = this.context.getNetwork();
            // TODO: use APAxios
            // const axios = await this.context.getAxios(cacheDuration);
            const url = this.baseUrl + `/api/date_by_block`;
            const headers = (0, requestUtils_1.getRequestHeaders)();
            const params = {
                network: network,
                block: blockNumber,
            };
            try {
                const response = yield axios_2.default.get(url, {
                    params,
                    headers,
                });
                if (!response || !response.data) {
                    this.context
                        .getLogger()
                        .error(`Invalid response with getDateByBlockAt. params: ${JSON.stringify(params)}. stacktrace: ${new Error().stack}`);
                    return null;
                }
                return response.data;
            }
            catch (e) {
                const msg = (0, requestUtils_1.generateAxiosErrorMessage)('getDateByBlockAt', url, e, params);
                this.context.getLogger().error(msg);
                throw e;
            }
        });
    }
}
exports.BlockbydateAPI = BlockbydateAPI;
//# sourceMappingURL=blockbydateAPI.js.map