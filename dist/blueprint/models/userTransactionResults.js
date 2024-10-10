"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTransactionResults = void 0;
class UserTransactionResults {
    constructor(userTransactions, lastSyncedBlock, isSyncingDataThroughJob = false) {
        this.userTransactions = userTransactions;
        this.lastSyncedBlock = lastSyncedBlock;
        this.isSyncingDataThroughJob = isSyncingDataThroughJob;
    }
}
exports.UserTransactionResults = UserTransactionResults;
//# sourceMappingURL=userTransactionResults.js.map