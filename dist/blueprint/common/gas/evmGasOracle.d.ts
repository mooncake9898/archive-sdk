import { BlueprintContext } from '../../models/blueprintContext';
import { GasOracle } from './gasOracle';
import { TransactionDetails } from '../../models/transactionDetails';
import BigNumber from 'bignumber.js';
export declare class EvmGasOracle implements GasOracle {
    private context;
    constructor(context: BlueprintContext);
    getTxnFeeUsd(txn: TransactionDetails, gasUsed: BigNumber): Promise<BigNumber>;
}
