import { AvailableNetwork } from './availableNetwork';
import { NetworkConfig } from './networkConfig';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AvaxNetworkConfig implements NetworkConfig {
  getBaseTokenForNetwork(): string {
    return '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7'; // AVAX;
  }

  getETHTokenAddrs(): string {
    return '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab';
  }

  getInitStartBlock(): number {
    return 56877;
  }

  getStablecoinTokenAddrs(): string {
    return '0xc7198437980c041c805a1edcba50c1ce5db95118';
  }

  getStablecoinTokenSym(): string {
    return 'USDT.e';
  }

  getNetwork(): AvailableNetwork {
    return AvailableNetwork.AVAX;
  }

  getNetworkName(): string {
    return 'Avalanche';
  }

  getRandomBackupProviderUrl(): string {
    return null;
  }

  getCurveUserGraphUrl(): string {
    return 'https://api.thegraph.com/subgraphs/name/apyvision/curve-avax-user-lp-transaction';
  }

  getCurveRegistryAddress(): string {
    return '0x8474ddbe98f5aa3179b3b3f5942d724afcdec9f6';
  }

  getCoingeckoPlatformName(): string {
    return 'avalanche';
  }

  getV3SubgraphUrl(_: string): string {
    return '';
  }

  getNFTManagerContractAddress(_: string): string {
    return '0x655c406ebfa14ee2006250925e54ec43ad184f8b'; //https://snowtrace.io/address/0x655c406ebfa14ee2006250925e54ec43ad184f8b#code
  }
}
