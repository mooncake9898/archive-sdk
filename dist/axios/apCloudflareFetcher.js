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
exports.ApCloudflareFetcher = void 0;
/**
 * This fetcher will first use a random proxy server, then will call the Cloudflare function with this random IP.
 * Cloudflare will then use the closest server to this IP and make the request.
 */
class ApCloudflareFetcher {
    constructor() {
        this.maxRetries = 3;
        this.retryStatusCodes = [429, 461, 562, 466, 561, 564, 565];
    }
    configureProxy() {
        if (!process.env.PROXY_USERNAME || !process.env.PROXY_PASSWORD) {
            throw new Error('Proxy credentials must be set in environment variables.');
        }
        return {
            protocol: 'http',
            host: 'global.rotating.proxyrack.net',
            port: 9000,
            auth: {
                username: process.env.PROXY_USERNAME,
                password: process.env.PROXY_PASSWORD,
            },
        };
    }
    fetch(axios, url, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let attempt = 0; attempt < this.maxRetries; attempt++) {
                try {
                    return yield axios.get(url, {
                        headers,
                        proxy: this.configureProxy(),
                    });
                }
                catch (error) {
                    if (this.isRetryable(error, attempt)) {
                        continue;
                    }
                    throw error;
                }
            }
        });
    }
    isRetryable(error, attempt) {
        return error.response && this.retryStatusCodes.includes(error.response.status) && attempt < this.maxRetries - 1;
    }
}
exports.ApCloudflareFetcher = ApCloudflareFetcher;
//# sourceMappingURL=apCloudflareFetcher.js.map