import { NFT_MANAGER_CONTRACT_ADDRESS } from './arbitrumNetworkConfig';
import { AvailableNetwork } from './availableNetwork';
import { NetworkConfig } from './networkConfig';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MaticNetworkConfig implements NetworkConfig {
  getBaseTokenForNetwork(): string {
    return '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'; // WMATIC;
  }

  getNetwork(): AvailableNetwork {
    return AvailableNetwork.MATIC;
  }

  getStablecoinTokenAddrs(): string {
    return '0x2791bca1f2de4661ed88a30c99a7a9449aa84174';
  }

  getETHTokenAddrs(): string {
    return '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619';
  }

  getStablecoinTokenSym(): string {
    return 'USDC';
  }

  getInitStartBlock(): number {
    return 4931780;
  }

  getNetworkName(): string {
    return 'Polygon (Matic)';
  }

  getRandomBackupProviderUrl(): string {
    return null;
  }

  getCurveUserGraphUrl(): string {
    return 'https://api.thegraph.com/subgraphs/name/apyvision/curvepolygonuserlptransaction';
  }

  getCurveRegistryAddress() {
    return '0x094d12e5b541784701FD8d65F11fc0598FBC6332';
  }

  getCoingeckoPlatformName(): string {
    return 'polygon-pos';
  }

  getV3SubgraphUrl(providerKey: string): string {
    const subgraphs = new Map();
    subgraphs.set('uniswapv3_matic', 'https://api.thegraph.com/subgraphs/name/apyvision/uniswap-v3-apy-vision-polygon');
    subgraphs.set('quickswapv3_matic', 'https://api.thegraph.com/subgraphs/name/sameepsi/quickswap-v3');
    const subgraphUrl = subgraphs.get(providerKey);
    if (!subgraphUrl) throw Error(`subgraph url not found for provider ${providerKey}, please check!!!`);
    return subgraphUrl;
  }

  getNFTManagerContractAddress(providerKey: string): string {
    const managers = new Map();
    managers.set('uniswapv3_matic', NFT_MANAGER_CONTRACT_ADDRESS);
    managers.set('quickswapv3_matic', '0x8ef88e4c7cfbbac1c163f7eddd4b578792201de6');
    const contractAddress = managers.get(providerKey);
    if (!contractAddress)
      throw Error(`NFT Manager contract address not found for provider ${providerKey}}, please check!!!`);
    return contractAddress;
  }
}
