import { PositionShares } from '../models/positionShares';
import BigNumber from 'bignumber.js';
export declare function createNilPositionShares(): PositionShares[];
export type UserAddressWithTimestamp = {
    sender: string;
    timestamp: string;
};
export declare function formatAsDecimalAwareString(balance: BigNumber | string, decimals?: number): string;
export declare function getBlockTag(blockNumber: number): object;
export declare function populateUserListFromSubgraph(getUserListFn: (timestamp: number) => Promise<UserAddressWithTimestamp[]>, blueprintKey: string, fromTimestamp?: number): Promise<string[]>;
