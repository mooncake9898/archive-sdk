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
exports.populateUserListFromSubgraph = exports.getBlockTag = exports.formatAsDecimalAwareString = exports.createNilPositionShares = void 0;
const positionShares_1 = require("../models/positionShares");
const bignumber_js_1 = __importDefault(require("bignumber.js"));
function createNilPositionShares() {
    return [new positionShares_1.PositionShares('', 0, null, false)];
}
exports.createNilPositionShares = createNilPositionShares;
function formatAsDecimalAwareString(balance, decimals = 18) {
    try {
        const bigNumberWithDecimals = (0, bignumber_js_1.default)(balance).dividedBy((0, bignumber_js_1.default)(10).exponentiatedBy(decimals));
        return bigNumberWithDecimals.toFixed();
    }
    catch (e) {
        this.context.getLogger().error(e.message);
        return null;
    }
}
exports.formatAsDecimalAwareString = formatAsDecimalAwareString;
function getBlockTag(blockNumber) {
    if (blockNumber > 0)
        return { blockTag: blockNumber };
    return {};
}
exports.getBlockTag = getBlockTag;
function populateUserListFromSubgraph(getUserListFn, blueprintKey, fromTimestamp) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let totalUsers = [];
            const MAX_NUM_RESULTS = 1000;
            const currentTimestamp = Math.floor(Date.now() / 1000);
            let timestampPointer = fromTimestamp || 1;
            while (timestampPointer < currentTimestamp) {
                const records = yield getUserListFn(timestampPointer);
                if (!records || records.length === 0)
                    break;
                timestampPointer = records.length < MAX_NUM_RESULTS ? currentTimestamp : Number(records.at(-1).timestamp);
                const users = records.map((record) => record.sender);
                totalUsers = totalUsers.concat(users);
            }
            const uniqueUsers = [...new Set(totalUsers)];
            return uniqueUsers;
        }
        catch (error) {
            const msg = `Could not populate ${blueprintKey} user list from subgraph. code: ${error.code}, message: ${error.message}`;
            throw new Error(msg);
        }
    });
}
exports.populateUserListFromSubgraph = populateUserListFromSubgraph;
//# sourceMappingURL=utils.js.map