"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaManager = void 0;
const kafkaConfig_1 = require("./kafkaConfig");
const types_1 = require("./types");
const kafkajs_1 = require("kafkajs");
class KafkaManager {
    constructor(kafkaConfig) {
        this._isConnected = false;
        this.acks = 0;
        this.consumerTestGroupID = 'test-kafka-manager';
        this.stringifyQueues = (array) => array.map((r) => {
            return { value: JSON.stringify(r) };
        });
        if (!kafkaConfig &&
            (!process.env.KAFKA_BROKER_URL || !process.env.KAFKA_PRODUCER_USERNAME || !process.env.KAFKA_PRODUCER_PASSWORD)) {
            console.error('Kafka environment variable is not set');
            return;
        }
        const kafkaClient = new kafkajs_1.Kafka(kafkaConfig !== null && kafkaConfig !== void 0 ? kafkaConfig : kafkaConfig_1.defaultKafkaConfig);
        this._producer = kafkaClient.producer();
        this._consumer = kafkaClient.consumer({ groupId: this.consumerTestGroupID });
    }
    static getInstance(kafkaConfig) {
        if (!KafkaManager.instance) {
            KafkaManager.instance = new KafkaManager(kafkaConfig);
        }
        return KafkaManager.instance;
    }
    get isConnected() {
        return this._isConnected;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._producer.connect();
                this._isConnected = true;
            }
            catch (err) {
                console.error('KafkaManager Error: producer failed to connect to broker', err, err.trace);
            }
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const kafkaManager = KafkaManager.getInstance();
                if (kafkaManager.isConnected) {
                    const producer = kafkaManager.producer;
                    yield producer.disconnect();
                    const consumer = kafkaManager.producer;
                    yield consumer.disconnect();
                }
            }
            catch (err) {
                console.error('Failed to disconnect kafka client', err);
            }
        });
    }
    get producer() {
        return this._producer;
    }
    get consumer() {
        return this._consumer;
    }
    sendResponseTimeToKafka(config, status, blueprintId, requestId, responseTimesTopic = types_1.Queues.RESPONSE_TIMES, sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!['staging', 'production'].includes(process.env.NODE_ENV))
                return;
            const timestamp = Math.floor(new Date().getTime());
            const requestDuration = config.metadata.duration;
            const hostName = this.getHostName(config.url);
            const responseTime = {
                url: config.url,
                hostName: hostName,
                blueprintId: blueprintId,
                // TODO  i can only presume indexerId was supposed to be a unique identifier for each AP producer instance
                indexerId: 'INDEXER-ID',
                responseStatusCode: status,
                responseTimeMs: requestDuration,
                timestamp: timestamp,
                requestId: requestId,
                extras: {
                    requestId: requestId,
                    nodeEnv: process.env.NODE_ENV,
                    sessionId,
                },
            };
            const responseTimeQueuesAsJson = this.stringifyQueues([responseTime]);
            this.sendMessage(responseTimesTopic, responseTimeQueuesAsJson);
        });
    }
    getHostName(url) {
        try {
            const parsedUrl = new URL(url);
            return parsedUrl.hostname;
        }
        catch (error) {
            console.error("Invalid URL:", error);
            return "";
        }
    }
    sendRpcResponseTimeToKafka(rpcUrl, requestDuration, requestId, responseTimesTopic = types_1.Queues.RESPONSE_TIMES, sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!['staging', 'production'].includes(process.env.NODE_ENV))
                return;
            const timestamp = Math.floor(new Date().getTime());
            const hostName = this.getHostName(rpcUrl);
            const responseTime = {
                url: rpcUrl,
                hostName: hostName,
                blueprintId: 'defaultBlueprintId',
                // TODO  i can only presume indexerId was supposed to be a unique identifier for each AP producer instance
                indexerId: 'INDEXER-ID',
                responseStatusCode: -1,
                responseTimeMs: Math.trunc(requestDuration),
                timestamp: timestamp,
                requestId: requestId,
                extras: {
                    requestId: requestId,
                    nodeEnv: process.env.NODE_ENV,
                    sessionId,
                },
            };
            const responseTimeQueuesAsJson = this.stringifyQueues([responseTime]);
            this.sendMessage(responseTimesTopic, responseTimeQueuesAsJson);
        });
    }
    sendRpcFailureToKafka(rpcEndpoint, networkId, rpcProviderFn, error, requestId, sessionId) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!['staging', 'production'].includes(process.env.NODE_ENV))
                return;
            const timestamp = Math.floor(new Date().getTime());
            const errorCode = error.code || ((_a = error.error) === null || _a === void 0 ? void 0 : _a.code) || 0;
            const rpcFailure = {
                rpcEndpoint,
                networkId,
                calledFunction: rpcProviderFn.toString(),
                errorMessage: error.message,
                errorCode,
                timestamp,
                extras: {
                    requestId: requestId,
                    nodeEnv: process.env.NODE_ENV,
                    sessionId,
                },
            };
            const rpcCallAsJson = this.stringifyQueues([rpcFailure]);
            this.sendMessage(types_1.Queues.RPC_FAILURE, rpcCallAsJson);
        });
    }
    sendLogs(msgs, topic = types_1.Queues.LOGS) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.sendMessage(topic, msgs.map((msg) => {
                return {
                    key: msg.blueprintId,
                    value: JSON.stringify(msg),
                };
            }));
        });
    }
    // TODO disconnecting before app shuts down https://stackoverflow.com/questions/67243831/do-we-need-to-connect-everytime-we-producer-kafka-message
    sendMessage(topic, messages) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isConnected) {
                yield this.connect();
            }
            if (!this.isConnected)
                return;
            yield this.producer.send({
                topic,
                messages,
                acks: this.acks,
            });
        });
    }
}
exports.KafkaManager = KafkaManager;
//# sourceMappingURL=KafkaManager.js.map