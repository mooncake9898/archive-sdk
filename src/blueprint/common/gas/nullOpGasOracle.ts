import { TransactionDetails } from '../../models/transactionDetails';
import { GasOracle } from './gasOracle';
import BigNumber from 'bignumber.js';

export class NullOpGasOracle implements GasOracle {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getTxnFeeUsd(_txn: TransactionDetails): Promise<BigNumber> {
    return Promise.resolve(BigNumber(0));
  }
}
