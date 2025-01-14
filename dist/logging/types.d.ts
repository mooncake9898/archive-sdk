export declare function multiply(a: number, b: number): number;
export declare enum Queues {
    LOGS = "logs",
    EXTERNAL_API_CALLS = "external_api_calls",
    RESPONSE_TIMES = "response_times",
    SAMPLES = "samples",
    BILLING = "billing",
    RPC_FAILURE = "rpc_failure"
}
export interface BillingQueue extends BaseQueue, BlueprintSessionQueue {
    consumerId?: string;
    indexerId?: string;
    data: string;
}
export interface SampleQueue extends BaseQueue {
    indexerId: string;
    data: string;
}
export interface ResponseTimeQueue extends BaseQueue {
    url: string;
    hostName: string;
    indexerId: string;
    responseTimeMs: number;
    responseStatusCode: number;
}
export interface RpcFailureQueue extends BaseQueue {
    rpcEndpoint: string;
    networkId: string;
    calledFunction: string;
    errorMessage: string;
    errorCode: number;
}
export interface ExternalAPICallQueue extends BaseQueue, BlueprintSessionQueue {
    url: string;
}
export interface LogQueue extends BaseQueue {
    logLevel: 'error' | 'warning' | 'info' | 'debug' | 'trace';
    message: string;
}
export interface BlueprintSessionQueue {
    runSessionId: string;
}
export interface BaseQueue {
    timestamp: number;
    blueprintId: string;
    nodeEnv?: string;
    extras?: object;
}
