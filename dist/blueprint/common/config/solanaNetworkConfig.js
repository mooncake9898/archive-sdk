"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolanaNetworkConfig = void 0;
const evmGasOracle_1 = require("../../../blueprint/common/gas/evmGasOracle");
const constants_1 = require("../../../constants");
const nullOpBlockTimeOracle_1 = require("../blocktime/nullOpBlockTimeOracle");
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getBlockTimeOracle(_context) {
        return new nullOpBlockTimeOracle_1.NullOpBlockTimeOracle();
    }
    getGasOracle(context) {
        if (!this.gasOracle) {
            // logic is the same as EVM (gasUsed * gasTokenPrice)
            this.gasOracle = new evmGasOracle_1.EvmGasOracle(context);
        }
        return this.gasOracle;
    }
}
exports.SolanaNetworkConfig = SolanaNetworkConfig;
//# sourceMappingURL=solanaNetworkConfig.js.map