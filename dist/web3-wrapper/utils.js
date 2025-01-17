"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSafeTransactionHash = getSafeTransactionHash;
exports.getContractFromEthers = getContractFromEthers;
const ethers_1 = require("ethers");
const ethers_v6_1 = require("ethers-v6");
/**
 * Safely returns transaction hash from a receipt that could be from v5 or v6 of ethers.js api
 * @param {ethers.providers.TransactionReceipt | EthersV6TxReceipt} transaction receipt
 * @returns {string} transaction hash
 */
function getSafeTransactionHash(receipt) {
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
function getContractFromEthers(address, abi, provider) {
    if (isEthersV6Provider(provider)) {
        return new ethers_v6_1.Contract(address, abi, provider);
    }
    return new ethers_1.ethers.Contract(address, abi, provider);
}
function isEthersV6Provider(provider) {
    return typeof provider.broadcastTransaction === 'function';
}
//# sourceMappingURL=utils.js.map