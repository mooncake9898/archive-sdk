import { BlockTimeOracle } from './blockTimeOracle';

export class NullOpBlockTimeOracle implements BlockTimeOracle {
  constructor() {}

  async getBlockNumber(txHash: string): Promise<number> {
    return Promise.resolve(0);
  }

  async getTimestamp(txHash: string): Promise<number> {
    return Promise.resolve(0);
  }
}
