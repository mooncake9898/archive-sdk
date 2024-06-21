import { AvailableNetwork } from './availableNetwork';
export interface NetworkConfig {
    getNetwork(): AvailableNetwork;
    getNetworkName(): string;
    getStablecoinTokenSym(): string;
    getStablecoinTokenAddrs(): string;
    getETHTokenAddrs(): string;
    getInitStartBlock(): number;
    /**
     * The base token, either WETH or WMATIC etc
     */
    getBaseTokenForNetwork(): string;
    getRandomBackupProviderUrl(): string;
    /**
     * Gets the subgraph that has the curve user amm shares info
     */
    getCurveUserGraphUrl(): string;
    getCurveRegistryAddress(): string;
    getCoingeckoPlatformName(): string;
    getV3SubgraphUrl(providerKey: string): string;
    getNFTManagerContractAddress(providerKey: string): string;
}
