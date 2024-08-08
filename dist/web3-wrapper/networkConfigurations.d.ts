import { ethers } from "ethers";
import { JsonRpcProvider } from "ethers-v6";
export declare class RpcConfig {
    url: string;
    weight: number;
}
export declare class Configuration {
    chainId: number | string;
    rpcs: RpcConfig[];
    constructor(chainId: number | string, rpcs: RpcConfig[]);
}
export type ArchiveJsonRpcProvider = JsonRpcProvider | ethers.providers.StaticJsonRpcProvider;
