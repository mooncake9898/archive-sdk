import { GasOracle } from './gasOracle';
import { TransactionDetails } from '../../models/transactionDetails';
import BigNumber from 'bignumber.js';

export class NullOpGasOracle implements GasOracle {
  getTxnFeeUsd(txn: TransactionDetails): Promise<BigNumber> {
    return Promise.resolve(BigNumber(0));
  }
}
