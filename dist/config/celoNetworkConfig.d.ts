import { AvailableNetwork } from './availableNetwork';
import { NetworkConfig } from './networkConfig';
export declare class CeloNetworkConfig implements NetworkConfig {
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
