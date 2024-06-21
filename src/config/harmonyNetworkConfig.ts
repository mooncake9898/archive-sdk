import { AvailableNetwork } from './availableNetwork';
import { NetworkConfig } from './networkConfig';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HarmonyNetworkConfig implements NetworkConfig {
  getBaseTokenForNetwork(): string {
    return '0xcf664087a5bb0237a0bad6742852ec6c8d69a27a'; // ONE;
  }

  getInitStartBlock(): number {
    return 10178693;
  }

  getStablecoinTokenAddrs(): string {
    return '0x985458e523db3d53125813ed68c274899e9dfab4';
  }

  getETHTokenAddrs(): string {
    return '0x6983d1e6def3690c4d616b13597a09e6193ea013';
  }

  getStablecoinTokenSym(): string {
    return '1USDC';
  }

  getNetwork(): AvailableNetwork {
    return AvailableNetwork.HARMONY;
  }

  getNetworkName(): string {
    return 'Harmony';
  }

  getRandomBackupProviderUrl(): string {
    return null;
  }

  getCurveUserGraphUrl(): string {
    return 'https://graph.t.hmny.io/subgraphs/name/apyvision/curve-harmony-lp-transaction';
  }

  getCurveRegistryAddress(): string {
    return '';
  }

  getCoingeckoPlatformName(): string {
    return 'harmony-shard-0';
  }

  getV3SubgraphUrl(_: string): string {
    return '';
  }

  getNFTManagerContractAddress(_: string): string {
    return '';
  }
}
