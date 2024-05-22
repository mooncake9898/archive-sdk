import { OperationType } from './constants';
import { TokenInfo } from './tokenInfo';
import BigNumber from 'bignumber.js';
export declare class Operation {
    operation: OperationType;
    inputTokens: TokenInfo[];
    outputTokens: TokenInfo[];
    /** Amount of 'shares' added/removed in this operation, it's positive if shares were added, negative if shares were removed */
    amountAdded: BigNumber;
    /** The fee (in USD) that the protocol took from the user as a platform toll (ie. liquidation fee) */
    adjustmentValueUsd: number;
    constructor(operation: OperationType, inputTokens: TokenInfo[], outputTokens: TokenInfo[], 
    /** Amount of 'shares' added/removed in this operation, it's positive if shares were added, negative if shares were removed */
    amountAdded?: BigNumber, 
    /** The fee (in USD) that the protocol took from the user as a platform toll (ie. liquidation fee) */
    adjustmentValueUsd?: number);
}
