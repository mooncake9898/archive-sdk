import { AvailableNetwork } from './availableNetwork';
import { NetworkConfig } from './networkConfig';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuroraNetworkConfig implements NetworkConfig {
  getStablecoinTokenSym(): string {
    throw new Error('Method not implemented.');
  }
  getNFTManagerContractAddress(): string {
    throw new Error('Method not implemented.');
  }
  getCurveUserGraphUrl(): string {
    throw new Error('Method not implemented.');
  }
  getCurveRegistryAddress(): string {
    throw new Error('Method not implemented.');
  }
  getRandomBackupProviderUrl(): string {
    return null;
  }
  getV3SubgraphUrl(): string {
    throw new Error('Method not implemented.');
  }
  getCoingeckoPlatformName(): string {
    throw new Error('Method not implemented.');
  }
  getNFTManagerContractAddressts(): string {
    throw new Error('Method not implemented.');
  }
  getStablecoinTokenAddrs(): string {
    throw new Error('Method not implemented.');
  }
  getVisionETHPairAddresses(): string[] {
    throw new Error('Method not implemented.');
  }
  getVisionETHPoolAddress(): string {
    throw new Error('Method not implemented.');
  }
  getMinPoolUsdValue(): number {
    throw new Error('Method not implemented.');
  }
  getUserLPTransactionsUrls(): string[] {
    throw new Error('Method not implemented.');
  }
  getUniV3UserLPTxnUrl(): string {
    throw new Error('Method not implemented.');
  }
  getPastLogBlockSize(): number {
    throw new Error('Method not implemented.');
  }
  getAlchemyUrl(): string {
    throw new Error('Method not implemented.');
  }

  getBaseTokenForNetwork(): string {
    return '0xc9bdeed33cd01541e1eed10f90519d2c06fe3feb'; // WETH
  }

  getInitStartBlock(): number {
    return 0;
  }

  getNetwork(): AvailableNetwork {
    return AvailableNetwork.AURORA;
  }

  getBasePoolProviderKey(): string {
    return 'trisolaris_aurora';
  }

  getProtocolKeys(): string[] {
    return [];
  }

  getNetworkName(): string {
    return 'Aurora';
  }

  getBlocksInOneDay(): number {
    return 7000;
  }

  getBlocksInTenMins(): number {
    return 48;
  }

  isContractNameLookupEnabled(): boolean {
    return true;
  }

  getExplorerUrl(): string {
    return 'https://aurorascan.dev/';
  }

  getAbiApiUrl(contractAddress: string): string {
    return `https://explorer.mainnet.aurora.dev/api?module=contract&action=getabi&address=${contractAddress}`;
  }

  isArchivalRPC(): boolean {
    return true;
  }

  getETHTokenAddrs(): string {
    return '0xc9bdeed33cd01541e1eed10f90519d2c06fe3feb'; // WETH
  }
}
