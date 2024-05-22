import BigNumber from 'bignumber.js';
/** Represents the number of shares the user has at a specific block.
 *
 *  positionBalance is optional for non-rebasing LP tokens, mandatory for rebasing LP tokens.
 */
export declare class PositionShares {
    /** Address of the receipt token, or if not receipt token, the address of the input token which will form the shares of the position */
    sharesIdentifier: string;
    /** Price of one share in USD */
    sharePriceUsd: number;
    /** Use this value for the position balance field if populated in positionValue.
     * If we don't populate this, that means the position doesn't change over time
     */
    positionBalance: BigNumber | null;
    /** It will be true in some cases where the position represents a liability instead of an asset (i.e. aave debt token) */
    isLiabilityPosition: boolean;
    constructor(
    /** Address of the receipt token, or if not receipt token, the address of the input token which will form the shares of the position */
    sharesIdentifier?: string, 
    /** Price of one share in USD */
    sharePriceUsd?: number, 
    /** Use this value for the position balance field if populated in positionValue.
     * If we don't populate this, that means the position doesn't change over time
     */
    positionBalance?: BigNumber | null, 
    /** It will be true in some cases where the position represents a liability instead of an asset (i.e. aave debt token) */
    isLiabilityPosition?: boolean);
}
