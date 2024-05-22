import { BlueprintContext } from '../models/blueprintContext';
export declare class BlockbydateAPI {
    private context;
    private baseUrl;
    constructor(context: BlueprintContext);
    getMostRecentTimestamp(): Promise<number>;
    getTimestampFromBlock(block: number): Promise<any>;
    getMostRecentBlock(): Promise<number>;
    getBlockFromTimestamp(timestamp: number, networkId?: string): Promise<number>;
    private getDateByBlockAt;
}
