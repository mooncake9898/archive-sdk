import { PositionShares } from '../models/positionShares';
import BigNumber from 'bignumber.js';

export function createNilPositionShares(): PositionShares[] {
  return [new PositionShares('', 0, null, false)];
}

export type UserAddressWithTimestamp = {
  sender: string;
  timestamp: string;
};

export function formatAsDecimalAwareString(balance: BigNumber | string, decimals = 18): string {
  try {
    const bigNumberWithDecimals = BigNumber(balance).dividedBy(BigNumber(10).exponentiatedBy(decimals));
    return bigNumberWithDecimals.toFixed();
  } catch (e) {
    this.context.getLogger().error(e.message);
    return null;
  }
}

export function getBlockTag(blockNumber: number): object {
  if (blockNumber > 0) return { blockTag: blockNumber };
  return {};
}

export async function populateUserListFromSubgraph(
  getUserListFn: (timestamp: number) => Promise<UserAddressWithTimestamp[]>,
  blueprintKey: string,
  fromTimestamp?: number,
): Promise<string[]> {
  try {
    let totalUsers = [];
    const MAX_NUM_RESULTS = 1000;

    const currentTimestamp = Math.floor(Date.now() / 1000);
    let timestampPointer = fromTimestamp || 1;
    while (timestampPointer < currentTimestamp) {
      const records = await getUserListFn(timestampPointer);

      if (!records || records.length === 0) break;
      timestampPointer = records.length < MAX_NUM_RESULTS ? currentTimestamp : Number(records.at(-1).timestamp);
      const users = records.map((record) => record.sender);
      totalUsers = totalUsers.concat(users);
    }

    const uniqueUsers = [...new Set(totalUsers)];
    return uniqueUsers;
  } catch (error) {
    const msg = `Could not populate ${blueprintKey} user list from subgraph. code: ${error.code}, message: ${error.message}`;
    throw new Error(msg);
  }
}
