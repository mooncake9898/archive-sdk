import { GasOracle } from './gasOracle';
import { TransactionDetails } from '../../models/transactionDetails';
import BigNumber from 'bignumber.js';
export declare class NullOpGasOracle implements GasOracle {
    getTxnFeeUsd(txn: TransactionDetails): Promise<BigNumber>;
}
