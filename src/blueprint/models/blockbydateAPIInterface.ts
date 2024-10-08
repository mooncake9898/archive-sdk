import { BlockTimestampDto } from '../../blueprint/models/blockTimestampDto';

export interface BlockByDateAPIInterface {
  getMostRecentTimestamp(): Promise<number>;
  getTimestampFromBlock(block: number): Promise<number>;
  getMostRecentBlock(): Promise<number>;
  getHeadInfo(): Promise<BlockTimestampDto>;
  getBlockFromTimestamp(timestamp: number, networkId?: string): Promise<number>;
}
