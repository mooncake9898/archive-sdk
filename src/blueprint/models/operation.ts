import { OperationType } from './constants';
import { TokenInfo } from './tokenInfo';
import BigNumber from 'bignumber.js';

export class Operation {
  constructor(
    // deposit | withdrawal | income | transfer_in | transfer_out | null_op
    public operation: OperationType,
    // tokens sent from user to protocol
    public inputTokens: TokenInfo[],
    // tokens sent from protocol to user
    public outputTokens: TokenInfo[],
    /** Amount of 'shares' added/removed in this operation, it's positive if shares were added, negative if shares were removed */
    public userSharesAdded = BigNumber(0),
    /** The fee (in USD) that the protocol took from the user as a platform toll (ie. liquidation fee) */
    public adjustmentValueUsd: number = 0,
  ) {}
}
