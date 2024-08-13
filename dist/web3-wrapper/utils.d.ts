import { ArchiveJsonRpcProvider } from './networkConfigurations';
import { ethers } from 'ethers';
import { Contract as EthersV6Contract, TransactionReceipt as EthersV6TxReceipt } from 'ethers-v6';
/**
 * Safely returns transaction hash from a receipt that could be from v5 or v6 of ethers.js api
 * @param {ethers.providers.TransactionReceipt | EthersV6TxReceipt} transaction receipt
 * @returns {string} transaction hash
 */
export declare function getSafeTransactionHash(receipt: ethers.providers.TransactionReceipt | EthersV6TxReceipt): string;
/**
 * Safely returns contract abstraction that could be from v5 or v6 of ethers.js api
 * @param {string} address
 * @param {ethers.ContractInterface | Interface | InterfaceAbi} abi
 * @param {ArchiveJsonRpcProvider} provider
 * @returns {EthersV6Contract | ethers.Contract} contract abstraction
 */
export declare function getContractFromEthers(address: string, abi: any, provider: ArchiveJsonRpcProvider): EthersV6Contract | ethers.Contract;
