"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionShares = void 0;
/** Represents the number of shares the user has at a specific block.
 *
 *  positionBalance is optional for non-rebasing LP tokens, mandatory for rebasing LP tokens.
 */
class PositionShares {
    constructor(
    /** Address of the receipt token, or if not receipt token, the address of the input token which will form the shares of the position */
    sharesIdentifier = '', 
    /** Price of one share in USD */
    sharePriceUsd = 0, 
    /** Use this value for the position balance field if populated in positionValue.
     * If we don't populate this, that means the position doesn't change over time
     */
    positionBalance = null, 
    /** It will be true in some cases where the position represents a liability instead of an asset (i.e. aave debt token) */
    isLiabilityPosition = false) {
        this.sharesIdentifier = sharesIdentifier;
        this.sharePriceUsd = sharePriceUsd;
        this.positionBalance = positionBalance;
        this.isLiabilityPosition = isLiabilityPosition;
    }
}
exports.PositionShares = PositionShares;
//# sourceMappingURL=positionShares.js.map