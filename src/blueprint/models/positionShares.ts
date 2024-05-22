import BigNumber from 'bignumber.js';

/** Represents the number of shares the user has at a specific block.
 *
 *  positionBalance is optional for non-rebasing LP tokens, mandatory for rebasing LP tokens.
 */
export class PositionShares {
  constructor(
    /** Address of the receipt token, or if not receipt token, the address of the input token which will form the shares of the position */
    public sharesIdentifier = '',
    /** Price of one share in USD */
    public sharePriceUsd = 0,
    /** Use this value for the position balance field if populated in positionValue.
     * If we don't populate this, that means the position doesn't change over time
     */
    public positionBalance: BigNumber | null = null,
    /** It will be true in some cases where the position represents a liability instead of an asset (i.e. aave debt token) */
    public isLiabilityPosition: boolean = false,
  ) {}
}
