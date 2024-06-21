import { AvailableNetwork } from './availableNetwork';
import { NetworkConfig } from './networkConfig';
import { Injectable } from '@nestjs/common';

@Injectable()
export class XdaiNetworkConfig implements NetworkConfig {
  getBaseTokenForNetwork(): string {
    return '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d'; // xDAI;
  }

  getETHTokenAddrs(): string {
    return '0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1';
  }

  getInitStartBlock(): number {
    return 11813493;
  }

  getStablecoinTokenAddrs(): string {
    return '0x4ecaba5870353805a9f068101a40e0f32ed605c6';
  }

  getStablecoinTokenSym(): string {
    return 'USDT';
  }

  getNetwork(): AvailableNetwork {
    return AvailableNetwork.XDAI;
  }

  getNetworkName(): string {
    return 'XDai';
  }

  getRandomBackupProviderUrl(): string {
    return null;
  }

  getCurveUserGraphUrl(): string {
    return 'https://api.thegraph.com/subgraphs/name/apyvision/curvexdaiuserlptransaction';
  }

  getCurveRegistryAddress(): string {
    return '0x55e91365697eb8032f98290601847296ec847210';
  }

  getCoingeckoPlatformName(): string {
    return 'xdai';
  }

  getV3SubgraphUrl(_: string): string {
    return '';
  }

  getNFTManagerContractAddress(_: string): string {
    return '';
  }
}
