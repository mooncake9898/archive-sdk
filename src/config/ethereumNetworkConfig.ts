import { NFT_MANAGER_CONTRACT_ADDRESS } from './arbitrumNetworkConfig';
import { AvailableNetwork } from './availableNetwork';
import { NetworkConfig } from './networkConfig';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EthereumNetworkConfig implements NetworkConfig {
  getBaseTokenForNetwork(): string {
    return '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'; // WETH
  }

  getNetwork(): AvailableNetwork {
    return AvailableNetwork.ETHEREUM;
  }

  getStablecoinTokenAddrs(): string {
    return '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
  }

  getETHTokenAddrs(): string {
    return '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
  }

  getStablecoinTokenSym(): string {
    return 'USDC';
  }

  getInitStartBlock(): number {
    return 9562480;
  }

  getNetworkName(): string {
    return 'Ethereum';
  }

  getRandomBackupProviderUrl(): string {
    return null;
  }

  getCurveUserGraphUrl(): string {
    return 'https://api.thegraph.com/subgraphs/name/apyvision/non-main-amm-shares';
  }

  getCurveRegistryAddress() {
    return '0x90e00ace148ca3b23ac1bc8c240c2a7dd9c2d7f5';
  }

  getCoingeckoPlatformName(): string {
    return 'ethereum';
  }

  getV3SubgraphUrl(_: string): string {
    return 'https://api.thegraph.com/subgraphs/name/apyvision/uniswap-v3-apy-vision';
  }

  getNFTManagerContractAddress(_: string): string {
    return NFT_MANAGER_CONTRACT_ADDRESS;
  }
}
