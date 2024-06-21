import { AvailableNetwork } from './availableNetwork';
import { NetworkConfig } from './networkConfig';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CeloNetworkConfig implements NetworkConfig {
  getBaseTokenForNetwork(): string {
    return '0x471ece3750da237f93b8e339c536989b8978a438'; // CELO;
  }

  getNetwork(): AvailableNetwork {
    return AvailableNetwork.CELO;
  }

  getETHTokenAddrs(): string {
    return '0xe919f65739c26a42616b7b8eedc6b5524d1e3ac4';
  }

  getStablecoinTokenSym(): string {
    return 'CUSD';
  }

  getStablecoinTokenAddrs(): string {
    return '0x765de816845861e75a25fca122bb6898b8b1282a';
  }

  getInitStartBlock(): number {
    return 5272596;
  }

  getNetworkName(): string {
    return 'Celo';
  }

  getRandomBackupProviderUrl(): string {
    return null;
  }

  getCurveUserGraphUrl(): string {
    return '';
  }

  getCurveRegistryAddress(): string {
    return '';
  }

  getCoingeckoPlatformName(): string {
    return 'celo';
  }

  getV3SubgraphUrl(_: string): string {
    return 'https://api.thegraph.com/subgraphs/name/apyvision/uniswap-v3-apy-vision-celo';
  }

  getNFTManagerContractAddress(_: string): string {
    return '0x3d79edaabc0eab6f08ed885c05fc0b014290d95a';
  }
}
