import { AvailableNetwork } from './availableNetwork';
import { NetworkConfig } from './networkConfig';
import { Injectable } from '@nestjs/common';

export const NFT_MANAGER_CONTRACT_ADDRESS = '0xc36442b4a4522e871399cd717abdd847ab11fe88';

@Injectable()
export class ArbitrumNetworkConfig implements NetworkConfig {
  getBaseTokenForNetwork(): string {
    return '0x82af49447d8a07e3bd95bd0d56f35241523fbab1'; // ETH
  }

  getNetwork(): AvailableNetwork {
    return AvailableNetwork.ARBITRUM;
  }

  getETHTokenAddrs(): string {
    return '0x82af49447d8a07e3bd95bd0d56f35241523fbab1';
  }

  getStablecoinTokenSym(): string {
    return 'USDC';
  }

  getStablecoinTokenAddrs(): string {
    return '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8';
  }

  getInitStartBlock(): number {
    return 226828;
  }

  getNetworkName(): string {
    return 'Arbitrum';
  }

  getRandomBackupProviderUrl(): string {
    return null;
  }

  getCurveUserGraphUrl(): string {
    return 'https://api.thegraph.com/subgraphs/name/apyvision/curvearbitrumuserlptransactions';
  }

  getCurveRegistryAddress(): string {
    return '0x445fe580ef8d70ff569ab36e80c647af338db351';
  }

  getCoingeckoPlatformName(): string {
    return 'arbitrum-one';
  }

  getV3SubgraphUrl(_: string): string {
    return 'https://api.thegraph.com/subgraphs/name/apyvision/uniswap-v3-apy-vision-arbitrum';
  }

  getNFTManagerContractAddress(_: string): string {
    return NFT_MANAGER_CONTRACT_ADDRESS;
  }
}
