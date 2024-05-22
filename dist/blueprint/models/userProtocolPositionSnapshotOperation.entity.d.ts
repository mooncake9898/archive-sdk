import { OperationType } from './constants';
import { UserProtocolPositionSnapshot } from './userProtocolPositionSnapshot.entity';
import { UserProtocolPositionSnapshotOperationToken } from './userProtocolPositionSnapshotOperationToken.entity';
import BigNumber from 'bignumber.js';
export declare class UserProtocolPositionSnapshotOperation {
    id: number;
    operationType: OperationType;
    operationValueUsd: BigNumber;
    userProtocolPositionSnapshot: UserProtocolPositionSnapshot;
    userProtocolPositionSnapshotId: number;
    userProtocolPositionSnapshotOperationTokens: UserProtocolPositionSnapshotOperationToken[];
    createdAt: Date;
    updatedAt: Date;
}
