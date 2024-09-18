import { AxiosInstance } from 'axios';

/**
 * This fetcher will first use a random proxy server, then will call the Cloudflare function with this random IP.
 * Cloudflare will then use the closest server to this IP and make the request.
 */
export class ApCloudflareFetcher {
  private readonly maxRetries = 3;
  private readonly retryStatusCodes = [429, 461, 562, 466, 561, 564, 565];

  private configureProxy() {
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

  async fetch(axios: AxiosInstance, url: string, headers = {}): Promise<any> {
    for (let attempt = 0; attempt < this.maxRetries; attempt++) {
      try {
        return await axios.get(url, {
          headers,
          proxy: this.configureProxy(),
        });
      } catch (error: any) {
        if (this.isRetryable(error, attempt)) {
          continue;
        }
        throw error;
      }
    }
  }

  private isRetryable(error: any, attempt: number): boolean {
    return error.response && this.retryStatusCodes.includes(error.response.status) && attempt < this.maxRetries - 1;
  }
}
