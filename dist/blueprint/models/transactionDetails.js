"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionData = exports.TransactionDetailsWithHeadBlock = exports.TransactionDetails = void 0;
/**
 * Represents a TransactionDetails from the blueprint
 */
class TransactionDetails {
    constructor(txHash, blockNumber = 0, timestamp = 0) {
        this.txHash = txHash;
        this.blockNumber = blockNumber;
        this.timestamp = timestamp;
    }
    static asUniqueList(a) {
        const seen = [];
        return a.filter((item) => {
            const txHash = item.txHash;
            if (seen.includes(txHash)) {
                return false;
            }
            seen.push(txHash);
            return true;
        });
    }
}
exports.TransactionDetails = TransactionDetails;
class TransactionDetailsWithHeadBlock {
    constructor(headBlock, transactionDetails) {
        this.headBlock = headBlock;
        this.transactionDetails = transactionDetails;
    }
}
exports.TransactionDetailsWithHeadBlock = TransactionDetailsWithHeadBlock;
class TransactionData {
    constructor(transactionDetails, transactionIndex, isLast) {
        this.transactionDetails = transactionDetails;
        this.transactionIndex = transactionIndex;
        this.isLast = isLast;
    }
}
exports.TransactionData = TransactionData;
//# sourceMappingURL=transactionDetails.js.map