"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PADDED_ZERO_ADDRS = exports.ETHER_GAS_TOKEN_DECIMALS = exports.ETHER_GAS_TOKEN_SYMBOL = exports.ETHER_GAS_TOKEN_IDENTIFIER = exports.STACKTRACE_KEY = exports.TokenTag = exports.OperationType = void 0;
var OperationType;
(function (OperationType) {
    OperationType["DEPOSIT"] = "deposit";
    OperationType["WITHDRAW"] = "withdraw";
    OperationType["INCOME"] = "income";
    OperationType["TRANSFER_IN"] = "transfer_in";
    OperationType["TRANSFER_OUT"] = "transfer_out";
    OperationType["NULL_OP"] = "null_op";
})(OperationType || (exports.OperationType = OperationType = {}));
var TokenTag;
(function (TokenTag) {
    TokenTag["EMPTY"] = "";
    TokenTag["TRADE_FEES"] = "trade_fees";
    TokenTag["REWARDS"] = "rewards";
    TokenTag["TRACKED_UNDERLYING"] = "tracked_underlying";
})(TokenTag || (exports.TokenTag = TokenTag = {}));
exports.STACKTRACE_KEY = 'stacktrace';
exports.ETHER_GAS_TOKEN_IDENTIFIER = 'Eth';
exports.ETHER_GAS_TOKEN_SYMBOL = 'ETH';
exports.ETHER_GAS_TOKEN_DECIMALS = 18;
exports.PADDED_ZERO_ADDRS = '0x0000000000000000000000000000000000000000';
//# sourceMappingURL=constants.js.map