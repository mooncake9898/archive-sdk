import { AxiosError } from 'axios';
export declare function generateAxiosErrorMessage(functionName: string, url: string, e: AxiosError, params?: {}): string;
export declare function getRequestHeaders(): Record<string, string>;
