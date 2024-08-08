import { ethers } from "ethers";
import { JsonRpcProvider } from "ethers-v6";

export class RpcConfig {
  url: string;
  weight: number;
}

export class Configuration {
  constructor(public chainId: number | string, public rpcs: RpcConfig[]) { }
}

export type ArchiveJsonRpcProvider = JsonRpcProvider | ethers.providers.StaticJsonRpcProvider;
