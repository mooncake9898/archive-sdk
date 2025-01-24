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
exports.ApGraphQLManager = void 0;
const apAxiosManager_1 = require("./apAxiosManager");
const logger_1 = require("./logger");
class ApGraphQLManager {
    constructor(axiosManager, subgraphURL) {
        this.axiosManager = axiosManager;
        this.subgraphURL = subgraphURL;
    }
    buildGraphQLRequestVariables(userAddress, fromBlock) {
        return Object.assign(Object.assign({}, (fromBlock && { fromBlock: fromBlock })), (userAddress && { userAddress: userAddress }));
    }
    selectAxiosInstance(blockNumber) {
        if (blockNumber && blockNumber > 0) {
            return this.axiosManager.cacheToAxiosInstance.get(apAxiosManager_1.CacheDuration.SHORT_CACHE_DURATION);
        }
        return this.axiosManager.cacheToAxiosInstance.get(apAxiosManager_1.CacheDuration.NO_CACHE);
    }
    /*
    Function for querying subgraphs.
    Note that typings are returned in a "best-effort" basis, i.e. if the subgraph returns a different type
    than what was passed when calling the function, this will simply be passed further without errors.
    Note also that any response with status ~ 2xx will trigger an AxiosError.
    Suggestion for implementing this function:
    try {
      await executeGraphQLQueryOrThrowError<myType>("query {uniswapV3Pools { id }}", 100);
    }
    catch (e: any){
       if (e instanceof AxiosError) {
        log('axios error', e.message, e.status, e.stack);
      } else {
        log('common error', e.stack);
      }
    }
    */
    executeGraphQLQueryOrThrowError(payload, variables = {}, blockNumber) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const axiosInstance = this.selectAxiosInstance(blockNumber);
            // Might throw errors if status not like 2xx or if casting to T yields an error.
            try {
                const response = yield axiosInstance.post(this.subgraphURL, { query: payload, variables: variables }, {
                    headers: { 'Content-Type': 'application/json' },
                    timeout: 60000, // Sometimes the subgraph takes a long time to respond than 15 seconds, so we increase the timeout
                });
                if (response.data.errors) {
                    const msg = `Invalid response from subgraph ${this.subgraphURL}. payload: ${payload}, variables: ${JSON.stringify(variables)} - ${JSON.stringify(response.data.errors)}`;
                    logger_1.ArchiveLogger.getLogger().error(msg);
                    throw new Error(msg);
                }
                return response.data;
            }
            catch (e) {
                const baseMsg = `Error when fetching subgraph ${this.subgraphURL}. payload: ${payload}, variables: ${JSON.stringify(variables)}`;
                const errorMsg = `code: ${e.code}, status: ${(_a = e.response) === null || _a === void 0 ? void 0 : _a.status}, statusText: ${(_b = e.response) === null || _b === void 0 ? void 0 : _b.statusText}, errorName: ${e.name}, message: ${e.message}, responseError: ${JSON.stringify((_d = (_c = e.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.errors)}, stackTrace: ${e.stack}`;
                logger_1.ArchiveLogger.getLogger().error(baseMsg + errorMsg);
                throw e;
            }
        });
    }
}
exports.ApGraphQLManager = ApGraphQLManager;
//# sourceMappingURL=apGraphQLManager.js.map