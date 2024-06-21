import { AvailableNetwork } from './availableNetwork';
import { NetworkConfig } from './networkConfig';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FantomNetworkConfig implements NetworkConfig {
  getBaseTokenForNetwork(): string {
    return '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83'; // WFTM
  }

  getInitStartBlock(): number {
    return 3500000;
  }

  getStablecoinTokenAddrs(): string {
    return '0x04068da6c83afcfa0e13ba15a6696662335d5b75';
  }

  getETHTokenAddrs(): string {
    return '0x74b23882a30290451a17c44f4f05243b6b58c76d';
  }

  getStablecoinTokenSym(): string {
    return 'USDC';
  }

  getNetwork(): AvailableNetwork {
    return AvailableNetwork.FANTOM;
  }

  getNetworkName(): string {
    return 'Fantom';
  }

  getRandomBackupProviderUrl(): string {
    return null;
  }

  getCurveUserGraphUrl(): string {
    return 'https://api.thegraph.com/subgraphs/name/apyvision/curvefantomuserlptransaction';
  }

  getCurveRegistryAddress(): string {
    return '0x0f854ea9f38cea4b1c2fc79047e9d0134419d5d6';
  }

  getCoingeckoPlatformName(): string {
    return 'fantom';
  }

  getV3SubgraphUrl(_: string): string {
    return '';
  }

  getNFTManagerContractAddress(_: string): string {
    return '';
  }
}
