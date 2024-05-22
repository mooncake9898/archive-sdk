import { PositionShares } from './positionShares';
import { TokenInfo } from './tokenInfo';
export declare class PositionValue {
    readonly positionValueUsd: number;
    readonly positionShareDetails: PositionShares[];
    readonly pendingIncome: TokenInfo[];
    readonly tokenAmounts: TokenInfo[];
    constructor(positionValueUsd: number, positionShareDetails: PositionShares[], pendingIncome?: TokenInfo[], tokenAmounts?: TokenInfo[]);
}
