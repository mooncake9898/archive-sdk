"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultKafkaConfig = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.defaultKafkaConfig = {
    requestTimeout: 20000,
    retry: {
        initialRetryTime: 1000,
        retries: 1,
        maxRetryTime: 3000,
        restartOnFailure: () => Promise.resolve(false),
    },
    brokers: [process.env.KAFKA_BROKER_URL],
    sasl: {
        mechanism: 'plain', // 'scram-sha-256'
        username: process.env.KAFKA_PRODUCER_USERNAME,
        password: process.env.KAFKA_PRODUCER_PASSWORD,
    },
    ssl: false,
    authenticationTimeout: 15000,
    connectionTimeout: 30000,
};
//# sourceMappingURL=kafkaConfig.js.map