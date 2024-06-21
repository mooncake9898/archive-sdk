import { AvailableNetwork } from './availableNetwork';
import { NetworkConfig } from './networkConfig';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BscNetworkConfig implements NetworkConfig {
  getBaseTokenForNetwork(): string {
    return '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'; // WBNB;
  }

  getNetwork(): AvailableNetwork {
    return AvailableNetwork.BSC;
  }

  getETHTokenAddrs(): string {
    return '0x2aab30a909748945d42c7d29d3cd44a5680cab1d';
  }

  getStablecoinTokenSym(): string {
    return 'BUSD';
  }

  getStablecoinTokenAddrs(): string {
    return '0xe9e7cea3dedca5984780bafc599bd69add087d56';
  }

  getInitStartBlock(): number {
    return 586851;
  }

  getNetworkName(): string {
    return 'Binance Smart Chain';
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
    return 'binance-smart-chain';
  }

  getV3SubgraphUrl(_: string): string {
    return 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-bsc?source=uniswap';
  }

  getNFTManagerContractAddress(providerKey: string): string {
    switch (providerKey) {
      case 'pancakeswap_v3_bsc':
        return '0x46a15b0b27311cedf172ab29e4f4766fbe7f4364';
      case 'uniswap_v3_bsc':
        return '0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613';
      default:
        return '0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613';
    }
  }
}
