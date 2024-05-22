import { UserProtocolPositionSnapshot } from './userProtocolPositionSnapshot.entity';
export declare class UserProtocolPosition {
    id: number;
    blueprintId: string;
    userIdentifier: string;
    positionIdentifier: string;
    chainId: number;
    userProtocolPositionSnapshots: UserProtocolPositionSnapshot[];
    createdAt: Date;
    updatedAt: Date;
}
