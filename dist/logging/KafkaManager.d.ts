import { MyRequestConfig } from './config/axios.config';
import { LogQueue, Queues } from './types';
import { ethers } from 'ethers';
import { Consumer, KafkaConfig, Message, Producer } from 'kafkajs';
export declare class KafkaManager {
    private static instance;
    static producer: Producer;
    private _producer;
    private _isConnected;
    private acks;
    static consumer: Consumer;
    private _consumer;
    private consumerTestGroupID;
    private constructor();
    static getInstance(kafkaConfig?: KafkaConfig): KafkaManager;
    get isConnected(): boolean;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    get producer(): Producer;
    get consumer(): Consumer;
    sendResponseTimeToKafka(config: MyRequestConfig, status: number, blueprintId: string, requestId?: string, responseTimesTopic?: Queues): Promise<void>;
    sendRpcResponseTimeToKafka(rpcUrl: string, requestDuration: number, requestId?: string, responseTimesTopic?: Queues): Promise<void>;
    sendRpcFailureToKafka(rpcEndpoint: string, networkId: string, rpcProviderFn: (provider: ethers.providers.StaticJsonRpcProvider) => Promise<any>, errorMessage: string, requestId?: string): Promise<void>;
    private stringifyQueues;
    sendLogs(msgs: LogQueue[], topic?: Queues): Promise<void>;
    sendMessage(topic: string, messages: Message[]): Promise<void>;
}
