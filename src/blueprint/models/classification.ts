import { Operation } from './operation';
import { PositionShares } from './positionShares';
import BigNumber from 'bignumber.js';

export class Classification {
  constructor(
    public operations: Operation[],
    // unique identifier
    public positionIdentifier: string,
    // gas token amount spent for transaction
    public gasTokenAmount = BigNumber(0),
    public positionShareDetails: PositionShares[],
  ) {}

  getSharesAdded(): BigNumber {
    if (this.operations.length == 0) return BigNumber(0);

    return this.operations.reduce((toll, operation) => toll.plus(operation.amountAdded), BigNumber(0));
  }

  getAdjustmentValueUsd(): BigNumber {
    if (this.operations.length == 0) return BigNumber(0);

    return this.operations.reduce((toll, operation) => toll.plus(operation.adjustmentValueUsd), BigNumber(0));
  }
}
