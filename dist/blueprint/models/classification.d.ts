import { Operation } from '../../blueprint/models/operation';
import { PositionShares } from './positionShares';
import BigNumber from 'bignumber.js';

export declare class Classification {
  operations: Operation[];
  positionIdentifier: string;
  gasTokenAmount: BigNumber;
  positionShareDetails: PositionShares[];
  constructor(
    operations: Operation[],
    positionIdentifier: string,
    gasTokenAmount: BigNumber,
    positionShareDetails: PositionShares[],
  );
  getSharesAdded(): BigNumber;
  getAdjustmentValueUsd(): BigNumber;
}
