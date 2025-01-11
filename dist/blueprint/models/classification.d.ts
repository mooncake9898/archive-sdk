import { Operation } from '../../blueprint/models/operation';
import { PositionShares } from './positionShares';
import BigNumber from 'bignumber.js';
export declare class Classification {
    operations: Operation[];
    positionIdentifier: string;
    gasTokenAmount: BigNumber;
    positionShareDetails: PositionShares[];
    userAddress: string;
    constructor(operations: Operation[], positionIdentifier: string, gasTokenAmount: BigNumber, positionShareDetails: PositionShares[], userAddress?: string);
    getSharesAdded(): BigNumber;
    getAdjustmentValueUsd(): BigNumber;
}
