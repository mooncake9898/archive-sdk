import { ArchiveJsonRpcProvider } from './networkConfigurations';
import { ethers } from 'ethers';
import { Contract as EthersV6Contract, TransactionReceipt as EthersV6TxReceipt, JsonRpcProvider } from 'ethers-v6';

/**
 * Safely returns transaction hash from a receipt that could be from v5 or v6 of ethers.js api
 * @param {ethers.providers.TransactionReceipt | EthersV6TxReceipt} transaction receipt
 * @returns {string} transaction hash
 */
export function getSafeTransactionHash(receipt: ethers.providers.TransactionReceipt | EthersV6TxReceipt): string {
  if ('transactionHash' in receipt) {
    return receipt.transactionHash;
  }
  return receipt.hash;
}
/**
 * Safely returns contract abstraction that could be from v5 or v6 of ethers.js api
 * @param {string} address
 * @param {ethers.ContractInterface | Interface | InterfaceAbi} abi
 * @param {ArchiveJsonRpcProvider} provider
 * @returns {EthersV6Contract | ethers.Contract} contract abstraction
 */
export function getContractFromEthers(address: string, abi: any, provider: ArchiveJsonRpcProvider) {
  if (isEthersV6Provider(provider)) {
    return new EthersV6Contract(address, abi, provider);
  }
  return new ethers.Contract(address, abi, provider);
}

function isEthersV6Provider(provider: any): provider is JsonRpcProvider {
  return typeof provider.broadcastTransaction === 'function';
}
