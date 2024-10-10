import { TransactionDetails } from './transactionDetails';

export declare class UserTransactionResults {
  userTransactions: TransactionDetails[];
  lastSyncedBlock: number;
  isSyncingDataThroughJob: boolean;
  constructor(userTransactions: TransactionDetails[], lastSyncedBlock: number, isSyncingDataThroughJob?: boolean);
}
