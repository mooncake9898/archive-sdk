import { TransactionDetails } from '../../models/transactionDetails';
import BigNumber from 'bignumber.js';
export interface GasOracle {
    getTxnFeeUsd(txn: TransactionDetails, gasUsed: BigNumber): Promise<BigNumber>;
}
