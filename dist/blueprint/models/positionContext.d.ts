import { BlueprintContext } from './blueprintContext';
import { UserProtocolPositionSnapshot } from './userProtocolPositionSnapshot.entity';
export declare class PositionContext {
    context: BlueprintContext;
    positionSnapshots: UserProtocolPositionSnapshot[];
    userAddresses: string[];
    positionIdentifier: string;
    constructor(context: BlueprintContext, positionSnapshots: UserProtocolPositionSnapshot[], userAddresses: string[], positionIdentifier: string);
}
