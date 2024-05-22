import { EntityType } from './entityType';
import { UserProtocolPosition } from './userProtocolPosition.entity';
export declare class UserProtocolPositionException {
    id: number;
    entityMetadata: object;
    exceptionMessage: object;
    entityType: EntityType;
    userProtocolPosition: UserProtocolPosition;
    userProtocolPositionId: number;
    createdAt: Date;
    updatedAt: Date;
}
