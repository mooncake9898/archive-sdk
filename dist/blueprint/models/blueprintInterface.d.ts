import { MetadataStore } from '../meta/metadataStore';
import { BlueprintContext } from './blueprintContext';
import { Classification } from './classification';
import { PositionContext } from './positionContext';
import { PositionValue } from './positionValue';
import { TimeContext } from './timeContext';
import { TransactionDetails } from './transactionDetails';
import { UserTransactionResults } from './userTransactionResults';

export interface Blueprint {
  getContractName(): string;
  getBlueprintKey(): string;
  getParentBlueprintId(): string;
  getContext(): BlueprintContext;
  getBlueprintCategory(): string;
  getTestWalletAddresses(): string[];
  getUserTransactions(
    context: BlueprintContext,
    userAddresses: string[],
    fromBlock: number,
  ): Promise<UserTransactionResults>;
  classifyTransaction(context: BlueprintContext, txn: TransactionDetails): Promise<Classification[]>;
  getCurrentPositionValue(positionContext: PositionContext): Promise<PositionValue>;
  getPositionValueAt(positionContext: PositionContext, timeContext: TimeContext): Promise<PositionValue>;
  getUserList(fromBlock: number, limit?: number, offset?: number): Promise<string[]>;
  syncMetadata(metadataStore: MetadataStore, lastSyncAt: number): Promise<number>;
  syncMetadataInterval(): number;
}
