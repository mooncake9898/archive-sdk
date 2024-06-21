import { AvailableNetwork } from './availableNetwork';
import { NetworkConfig } from './networkConfig';
export declare class MaticNetworkConfig implements NetworkConfig {
    getBaseTokenForNetwork(): string;
    getNetwork(): AvailableNetwork;
    getStablecoinTokenAddrs(): string;
    getETHTokenAddrs(): string;
    getStablecoinTokenSym(): string;
    getInitStartBlock(): number;
    getNetworkName(): string;
    getRandomBackupProviderUrl(): string;
    getCurveUserGraphUrl(): string;
    getCurveRegistryAddress(): string;
    getCoingeckoPlatformName(): string;
    getV3SubgraphUrl(providerKey: string): string;
    getNFTManagerContractAddress(providerKey: string): string;
}
