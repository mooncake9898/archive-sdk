import { TransactionDetails } from '../../models/transactionDetails';
import { GasOracle } from './gasOracle';
import BigNumber from 'bignumber.js';

export declare class NullOpGasOracle implements GasOracle {
  getTxnFeeUsd(_txn: TransactionDetails): Promise<BigNumber>;
}
