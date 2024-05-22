import { BlockTimeOracle } from './blockTimeOracle';
export declare class NullOpBlockTimeOracle implements BlockTimeOracle {
    constructor();
    getBlockNumber(txHash: string): Promise<number>;
    getTimestamp(txHash: string): Promise<number>;
}
