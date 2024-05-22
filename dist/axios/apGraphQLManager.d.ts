import { ApAxiosManager } from './apAxiosManager';
export declare class ApGraphQLManager {
    private axiosManager;
    private subgraphURL;
    constructor(axiosManager: ApAxiosManager, subgraphURL: string);
    buildGraphQLRequestVariables(userAddress?: string, fromBlock?: number): {
        userAddress: string;
        fromBlock: number;
    };
    private selectAxiosInstance;
    executeGraphQLQueryOrThrowError<T>(payload: string, variables?: {}, blockNumber?: number): Promise<T>;
}
