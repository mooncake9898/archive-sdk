import { BlueprintContext } from './blueprintContext';
export declare class BlueprintRequest {
    context: BlueprintContext;
    blueprintKey: string;
    userAddresses: string[];
    constructor(context: BlueprintContext, blueprintKey: string, userAddresses: string[]);
    getContext(): BlueprintContext;
}
