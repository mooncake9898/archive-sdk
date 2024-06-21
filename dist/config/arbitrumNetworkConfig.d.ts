import { AvailableNetwork } from './availableNetwork';
import { NetworkConfig } from './networkConfig';
export declare const NFT_MANAGER_CONTRACT_ADDRESS = "0xc36442b4a4522e871399cd717abdd847ab11fe88";
export declare class ArbitrumNetworkConfig implements NetworkConfig {
    getBaseTokenForNetwork(): string;
    getNetwork(): AvailableNetwork;
    getETHTokenAddrs(): string;
    getStablecoinTokenSym(): string;
    getStablecoinTokenAddrs(): string;
    getInitStartBlock(): number;
    getNetworkName(): string;
    getRandomBackupProviderUrl(): string;
    getCurveUserGraphUrl(): string;
    getCurveRegistryAddress(): string;
    getCoingeckoPlatformName(): string;
    getV3SubgraphUrl(_: string): string;
    getNFTManagerContractAddress(_: string): string;
}
