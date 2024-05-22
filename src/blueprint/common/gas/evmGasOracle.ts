import { BlueprintContext } from '../../models/blueprintContext';
import { GasOracle } from './gasOracle';
import { TransactionDetails } from '../../models/transactionDetails';
import BigNumber from 'bignumber.js';

export class EvmGasOracle implements GasOracle {
  constructor(private context: BlueprintContext) {}

  async getTxnFeeUsd(txn: TransactionDetails, gasUsed: BigNumber): Promise<BigNumber> {
    try {
      const gasTokenPrice = await this.context.getExchangePrice().getBaseGasTokenPrice(txn.blockNumber);
      if (!gasTokenPrice) return BigNumber(0);
      return gasUsed.multipliedBy(BigNumber(gasTokenPrice));
    } catch {
      this.context.getLogger().warn(`Could not fetch tx fee from tx ${txn.txHash}, returning 0 as gas`);
      BigNumber(0);
    }
  }
}
