import { TransactionDetails } from '../../models/transactionDetails';
import { GasOracle } from './gasOracle';
import BigNumber from 'bignumber.js';

export declare class NullOpGasOracle implements GasOracle {
  getTxnFeeUsd(txn: TransactionDetails): Promise<BigNumber>;
}
