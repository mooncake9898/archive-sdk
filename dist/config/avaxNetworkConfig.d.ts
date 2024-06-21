import { AvailableNetwork } from './availableNetwork';
import { NetworkConfig } from './networkConfig';
export declare class AvaxNetworkConfig implements NetworkConfig {
    getBaseTokenForNetwork(): string;
    getETHTokenAddrs(): string;
    getInitStartBlock(): number;
    getStablecoinTokenAddrs(): string;
    getStablecoinTokenSym(): string;
    getNetwork(): AvailableNetwork;
    getNetworkName(): string;
    getRandomBackupProviderUrl(): string;
    getCurveUserGraphUrl(): string;
    getCurveRegistryAddress(): string;
    getCoingeckoPlatformName(): string;
    getV3SubgraphUrl(_: string): string;
    getNFTManagerContractAddress(_: string): string;
}
