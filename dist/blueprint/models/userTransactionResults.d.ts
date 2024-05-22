import { TransactionDetails } from './transactionDetails';
export declare class UserTransactionResults {
    userTransactions: TransactionDetails[];
    lastSyncedBlock: number;
    constructor(userTransactions: TransactionDetails[], lastSyncedBlock: number);
}
