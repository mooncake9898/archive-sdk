export function multiply(a: number, b: number) {
  return a * b;
}

export enum Queues {
  LOGS = 'logs',
  EXTERNAL_API_CALLS = 'external_api_calls',
  RESPONSE_TIMES = 'response_times',
  SAMPLES = 'samples',
  BILLING = 'billing',
  RPC_FAILURE = 'rpc_failure',
}

export interface BillingQueue extends BaseQueue, BlueprintSessionQueue {
  // Both IDs set to optional so that billing can be applied both to consumers and to indexers
  consumerId?: string; // unique identifier of data consumer
  indexerId?: string; // unique identifier of indexer
  data: string;
}

export interface SampleQueue extends BaseQueue {
  indexerId: string;
  data: string;
}

export interface ResponseTimeQueue extends BaseQueue {
  url: string;
  indexerId: string;
  responseTimeMs: number;
  responseStatusCode: number;
}

export interface RpcFailureQueue extends BaseQueue {
  rpcEndpoint: string;
  networkId: string;
  calledFunction: string;
  errorResponse: any;
}
export interface ExternalAPICallQueue extends BaseQueue, BlueprintSessionQueue {
  url: string;
}

export interface LogQueue extends BaseQueue {
  logLevel: 'error' | 'warning' | 'info' | 'debug' | 'trace';
  message: string;
}

export interface BlueprintSessionQueue {
  runSessionId: string; // uniquely identifies the blueprint run session
}

export interface BaseQueue {
  timestamp: number;
  blueprintId: string;
  nodeEnv?: string;
  extras?: object; // this object hold a list of additional info to be sent
}
