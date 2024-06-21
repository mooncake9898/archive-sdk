import { AvailableNetwork } from './availableNetwork';
import { NetworkConfig } from './networkConfig';

export class BaseNetworkConfig implements NetworkConfig {
  getBaseTokenForNetwork(): string {
    return '0x4200000000000000000000000000000000000006'; // wETH
  }

  getNetwork(): AvailableNetwork {
    return AvailableNetwork.BASE;
  }

  getETHTokenAddrs(): string {
    return this.getBaseTokenForNetwork();
  }

  getStablecoinTokenSym(): string {
    return 'USDC';
  }

  getStablecoinTokenAddrs(): string {
    return '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913';
  }

  getInitStartBlock(): number {
    return 1;
  }

  getNetworkName(): string {
    return 'Base';
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
    return 'base';
  }

  getV3SubgraphUrl(_: string): string {
    return '';
  }

  getNFTManagerContractAddress(_: string): string {
    return '0x03a520b32c04bf3beef7beb72e919cf822ed34f1'; // base non fungible position manager => https://basescan.org/address/0x03a520b32c04bf3beef7beb72e919cf822ed34f1
  }
}
