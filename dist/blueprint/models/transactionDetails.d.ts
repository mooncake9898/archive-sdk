/**
 * Represents a TransactionDetails from the blueprint
 */
export declare class TransactionDetails {
    txHash: string;
    blockNumber: number;
    timestamp: number;
    constructor(txHash: string, blockNumber?: number, timestamp?: number);
    static asUniqueList(a: TransactionDetails[]): TransactionDetails[];
}
