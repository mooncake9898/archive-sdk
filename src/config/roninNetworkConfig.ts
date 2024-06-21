import { AvailableNetwork } from './availableNetwork';
import { NetworkConfig } from './networkConfig';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RoninNetworkConfig implements NetworkConfig {
  getBaseTokenForNetwork(): string {
    return '0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5'; // WETH;
  }

  getNetwork(): AvailableNetwork {
    return AvailableNetwork.RONIN;
  }

  getETHTokenAddrs(): string {
    return '0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5';
  }

  getStablecoinTokenSym(): string {
    return 'USDC';
  }

  getStablecoinTokenAddrs(): string {
    return '0xa7964991f339668107e2b6a6f6b8e8b74aa9d017';
  }

  getInitStartBlock(): number {
    return 8091783;
  }

  getNetworkName(): string {
    return 'Ronin';
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
    return 'ronin';
  }

  getV3SubgraphUrl(_: string): string {
    return '';
  }

  getNFTManagerContractAddress(_: string): string {
    return '';
  }
}
