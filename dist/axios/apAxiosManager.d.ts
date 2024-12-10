import { KafkaManager } from '../logging';
import { AxiosInstance } from 'axios';
import { InternalAxiosRequestConfig } from 'axios';
import { CreateAxiosDefaults } from 'axios/index';
export interface MyRequestConfig extends InternalAxiosRequestConfig {
    metadata: {
        startTime: Date;
        duration?: number;
        endTime?: Date;
    };
}
export declare enum CacheDuration {
    NO_CACHE = 0,
    SHORT_CACHE_DURATION = 1
}
export declare class ApAxiosManager {
    private blueprintId;
    private kafkaManager;
    private requestId?;
    private sessionId?;
    cacheToAxiosInstance: Map<CacheDuration, AxiosInstance>;
    private config?;
    constructor(blueprintId: string, kafkaManager: KafkaManager, requestId?: string, sessionId?: string);
    setup(config?: CreateAxiosDefaults): void;
    setRequestId(requestId: string): void;
    setSessionId(sessionId: string): void;
    private setupNoCacheDurationInstance;
    private setupShortCacheDurationAxiosInstance;
    private requestInterceptorOnFulfilled;
    private requestInterceptorOnRejected;
    private responseInterceptorOnFulfilled;
    private responseInterceptorOnRejected;
    private logResponseTime;
    private calculateRequestDuration;
    private assertRequestAllowed;
    private generateAxiosErrorMessage;
}
