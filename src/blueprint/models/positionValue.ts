import { PositionShares } from './positionShares';
import { TokenInfo } from './tokenInfo';

export class PositionValue {
  constructor(
    readonly positionValueUsd: number,
    readonly positionShareDetails: PositionShares[],
    readonly pendingIncome: TokenInfo[] = [],
    readonly tokenAmounts: TokenInfo[] = [], // non receipt tokens that constitute the positionValue (no LP tokens)
  ) {}
}
