import { UserProtocolPositionSnapshotOperation } from '../models';
import { UserProtocolPosition } from './userProtocolPosition.entity';
import BigNumber from 'bignumber.js';
import { Relation } from 'typeorm';

export declare class UserProtocolPositionSnapshot {
  id: number;
  userPrincipalCostUsd: BigNumber;
  userPrincipalUnitCostUsd: BigNumber;
  positionUsdValueAtBlock: BigNumber;
  blockNumber: number;
  timestamp: number;
  txHash: string;
  txFeeUsd: BigNumber;
  gasTokenAmount: BigNumber;
  positionSharesAtBlock: BigNumber;
  userPrincipalShares: BigNumber;
  exitRatio: BigNumber;
  exitedCostUsd: BigNumber;
  exitedValueUsd: BigNumber;
  exitedHodlValueUsd: BigNumber;
  ifHeldAllAmountEth: BigNumber;
  ifHeldAllAmountBtc: BigNumber;
  isNewSession: boolean;
  isFullyExitedSession: boolean;
  isLiabilityPosition: boolean;
  transactionIndex: number;
  userProtocolPosition: Relation<UserProtocolPosition>;
  userProtocolPositionId: number;
  userProtocolPositionSnapshotOperations: Relation<UserProtocolPositionSnapshotOperation[]>;
  warning: object;
  createdAt: Date;
  updatedAt: Date;
}
