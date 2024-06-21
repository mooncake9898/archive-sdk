import { NFT_MANAGER_CONTRACT_ADDRESS } from './arbitrumNetworkConfig';
import { AvailableNetwork } from './availableNetwork';
import { NetworkConfig } from './networkConfig';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OptimismNetworkConfig implements NetworkConfig {
  getBaseTokenForNetwork(): string {
    return '0x4200000000000000000000000000000000000006'; // WETH;
  }

  getNetwork(): AvailableNetwork {
    return AvailableNetwork.OPTIMISM;
  }

  getETHTokenAddrs(): string {
    return '0x4200000000000000000000000000000000000006';
  }

  getStablecoinTokenSym(): string {
    return 'USDC';
  }

  getStablecoinTokenAddrs(): string {
    return '0x7f5c764cbc14f9669b88837ca1490cca17c31607';
  }

  getInitStartBlock(): number {
    return 1;
  }

  getNetworkName(): string {
    return 'Optimism';
  }

  getRandomBackupProviderUrl(): string {
    return null;
  }

  getCurveUserGraphUrl(): string {
    return 'https://api.thegraph.com/subgraphs/name/apyvision/curve-optimism-user-lp-transaction';
  }

  getCurveRegistryAddress(): string {
    return '0xC5cfaDA84E902aD92DD40194f0883ad49639b023';
  }

  getCoingeckoPlatformName(): string {
    return 'optimistic-ethereum';
  }

  getV3SubgraphUrl(_: string): string {
    return 'https://api.thegraph.com/subgraphs/name/ianlapham/optimism-post-regenesis';
  }

  getNFTManagerContractAddress(_: string): string {
    return NFT_MANAGER_CONTRACT_ADDRESS;
  }
}
