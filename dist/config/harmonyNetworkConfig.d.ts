import { AvailableNetwork } from './availableNetwork';
import { NetworkConfig } from './networkConfig';
export declare class HarmonyNetworkConfig implements NetworkConfig {
    getBaseTokenForNetwork(): string;
    getInitStartBlock(): number;
    getStablecoinTokenAddrs(): string;
    getETHTokenAddrs(): string;
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
