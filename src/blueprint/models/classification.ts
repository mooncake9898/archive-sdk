import { Operation } from '../../blueprint/models/operation';
import { PositionShares } from './positionShares';
import BigNumber from 'bignumber.js';

export class Classification {
  operations: Operation[];
  // unique identifier
  positionIdentifier: string;
  // gas token amount spent for transaction
  gasTokenAmount: BigNumber;
  positionShareDetails: PositionShares[];
  userAddress: string;

  constructor(
    operations: Operation[],
    positionIdentifier: string,
    gasTokenAmount = BigNumber(0),
    positionShareDetails: PositionShares[],
    userAddress = '',
  ) {
    this.operations = operations;
    this.positionIdentifier = positionIdentifier;
    this.gasTokenAmount = gasTokenAmount;
    this.positionShareDetails = positionShareDetails;
    this.userAddress = userAddress;
  }

  getSharesAdded(): BigNumber {
    if (this.operations.length == 0) return BigNumber(0);

    return this.operations.reduce((toll, operation) => toll.plus(operation.userSharesAdded), BigNumber(0));
  }

  getAdjustmentValueUsd(): BigNumber {
    if (this.operations.length == 0) return BigNumber(0);

    return this.operations.reduce((toll, operation) => toll.plus(operation.adjustmentValueUsd), BigNumber(0));
  }
}
