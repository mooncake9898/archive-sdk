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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApAxiosManager = exports.CacheDuration = void 0;
const axios_1 = __importDefault(require("axios"));
const axios_cache_interceptor_1 = require("axios-cache-interceptor");
const axios_retry_1 = __importDefault(require("axios-retry"));
var CacheDuration;
(function (CacheDuration) {
    CacheDuration[CacheDuration["NO_CACHE"] = 0] = "NO_CACHE";
    CacheDuration[CacheDuration["SHORT_CACHE_DURATION"] = 1] = "SHORT_CACHE_DURATION";
})(CacheDuration || (exports.CacheDuration = CacheDuration = {}));
// Note that only GET requests are cached.
class ApAxiosManager {
    constructor(blueprintId, kafkaManager, requestId, sessionId) {
        this.blueprintId = blueprintId;
        this.kafkaManager = kafkaManager;
        this.requestId = requestId;
        this.sessionId = sessionId;
        this.cacheToAxiosInstance = new Map();
    }
    setup(config) {
        this.config = config;
        this.setupNoCacheDurationInstance();
        this.setupShortCacheDurationAxiosInstance();
    }
    setRequestId(requestId) {
        this.requestId = requestId;
    }
    setSessionId(sessionId) {
        this.sessionId = sessionId;
    }
    setupNoCacheDurationInstance() {
        const shortDurationInstance = axios_1.default.create(this.config);
        (0, axios_retry_1.default)(axios_1.default, { retries: 2, retryDelay: axios_retry_1.default.exponentialDelay });
        shortDurationInstance.interceptors.request.use((config) => this.requestInterceptorOnFulfilled(config), (error) => this.requestInterceptorOnRejected(error));
        shortDurationInstance.interceptors.response.use((response) => this.responseInterceptorOnFulfilled(response), (error) => this.responseInterceptorOnRejected(error));
        this.cacheToAxiosInstance.set(CacheDuration.NO_CACHE, shortDurationInstance);
    }
    setupShortCacheDurationAxiosInstance() {
        const shortDurationInstance = axios_1.default.create(this.config);
        (0, axios_retry_1.default)(axios_1.default, { retries: 2, retryDelay: axios_retry_1.default.exponentialDelay });
        shortDurationInstance.interceptors.request.use((config) => this.requestInterceptorOnFulfilled(config), (error) => this.requestInterceptorOnRejected(error));
        shortDurationInstance.interceptors.response.use((response) => this.responseInterceptorOnFulfilled(response), (error) => this.responseInterceptorOnRejected(error));
        (0, axios_cache_interceptor_1.setupCache)(shortDurationInstance, { storage: (0, axios_cache_interceptor_1.buildMemoryStorage)(false) });
        this.cacheToAxiosInstance.set(CacheDuration.SHORT_CACHE_DURATION, shortDurationInstance);
    }
    requestInterceptorOnFulfilled(config) {
        return __awaiter(this, void 0, void 0, function* () {
            this.assertRequestAllowed(config.url);
            config.metadata = { startTime: new Date() };
            return config;
        });
    }
    requestInterceptorOnRejected(error) {
        return __awaiter(this, void 0, void 0, function* () {
            this.assertRequestAllowed(error.url);
            return Promise.reject(error);
        });
    }
    responseInterceptorOnFulfilled(response) {
        return __awaiter(this, void 0, void 0, function* () {
            this.calculateRequestDuration(response.config);
            if (!response.cached) {
                yield this.logResponseTime(response.config, response.status);
            }
            return response;
        });
    }
    responseInterceptorOnRejected(error) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            this.calculateRequestDuration(error.config);
            const status = (_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.status) !== null && _b !== void 0 ? _b : 400;
            yield this.logResponseTime(error.config, status);
            yield this.kafkaManager.sendLogs([
                {
                    logLevel: 'error',
                    message: this.generateAxiosErrorMessage(error),
                    timestamp: Date.now(),
                    blueprintId: this.blueprintId,
                    extras: {
                        requestId: this.requestId,
                        sessionId: this.sessionId,
                    },
                },
            ]);
            return Promise.reject(error);
        });
    }
    logResponseTime(config, status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.kafkaManager.sendResponseTimeToKafka(config, status, this.blueprintId, this.requestId, null, this.sessionId);
        });
    }
    calculateRequestDuration(config) {
        config.metadata.endTime = new Date();
        config.metadata.duration = config.metadata.endTime.getTime() - config.metadata.startTime.getTime();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    assertRequestAllowed(_) {
        //Check if request allowed - not implemented yet
    }
    generateAxiosErrorMessage(e) {
        var _a, _b, _c, _d, _e;
        return `Axios Error when calling ${(_a = e.config) === null || _a === void 0 ? void 0 : _a.method}, url: ${(_b = e.request) === null || _b === void 0 ? void 0 : _b.url}, params: ${JSON.stringify((_c = e.config) === null || _c === void 0 ? void 0 : _c.params)}, code: ${e.code}, status: ${(_d = e.response) === null || _d === void 0 ? void 0 : _d.status}, statusText: ${(_e = e.response) === null || _e === void 0 ? void 0 : _e.statusText}, errorName: ${e.name}, message: ${e.message}, stackTrace: ${e.stack}`;
    }
}
exports.ApAxiosManager = ApAxiosManager;
//# sourceMappingURL=apAxiosManager.js.map