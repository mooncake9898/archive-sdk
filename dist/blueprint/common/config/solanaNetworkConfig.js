"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolanaNetworkConfig = void 0;
const nullOpBlockTimeOracle_1 = require("../blocktime/nullOpBlockTimeOracle");
const nullOpGasOracle_1 = require("../gas/nullOpGasOracle");
const constants_1 = require("@src/constants");
const solanaTokenMetadataOracle_1 = require("../token/solanaTokenMetadataOracle");
class SolanaNetworkConfig {
    getInitStartBlock() {
        // https://solscan.io/block/1
        return 1; // first valid block with valid txs
    }
    getNetwork() {
        return Number(constants_1.CHAINID.SOLANA);
    }
    getNetworkName() {
        return 'Solana';
    }
    isContractNameLookupEnabled() {
        return true;
    }
    getGasOracle(context) {
        // TODO implement this for Solana
        return new nullOpGasOracle_1.NullOpGasOracle();
    }
    getTokenMetadataOracle(context) {
        if (!this.tokenMetadataOracle) {
            this.tokenMetadataOracle = new solanaTokenMetadataOracle_1.SolanaTokenMetadataOracle(context);
        }
        return this.tokenMetadataOracle;
    }
    getBlockTimeOracle(context) {
        return new nullOpBlockTimeOracle_1.NullOpBlockTimeOracle();
    }
}
exports.SolanaNetworkConfig = SolanaNetworkConfig;
//# sourceMappingURL=solanaNetworkConfig.js.map