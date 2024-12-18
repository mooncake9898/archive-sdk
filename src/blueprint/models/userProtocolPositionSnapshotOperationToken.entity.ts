import { UserProtocolPositionSnapshotOperation } from '../models';
import { TokenDirection, TokenTag, TokenType } from '../models';
import { BigNumberNumericTransformer } from './bigNumberNumericTransformer';
import { ColumnNumericTransformer } from './columnNumericTransformer';
import BigNumber from 'bignumber.js';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user_protocol_position_snapshot_operation_tokens' })
@Index(['tokenAddress', 'userProtocolPositionSnapshotOperationId', 'tokenDirection', 'tag'], { unique: true })
export class UserProtocolPositionSnapshotOperationToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tokenName: string;

  @Column()
  tokenAddress: string;

  @Column({
    type: 'enum',
    enum: TokenDirection,
  })
  tokenDirection: TokenDirection;

  @Column({
    type: 'enum',
    enum: TokenType,
  })
  tokenType: TokenType;

  @Column({
    type: 'enum',
    enum: TokenTag,
    default: TokenTag.EMPTY,
  })
  tag: TokenTag;

  @Column()
  tokenRawAmount: string;

  @Column('int', { transformer: new ColumnNumericTransformer() })
  decimals: number;

  @Column('decimal', { transformer: new BigNumberNumericTransformer(), nullable: true })
  totalAmountDeposited: BigNumber;

  @Column('decimal', { transformer: new BigNumberNumericTransformer(), nullable: true })
  totalAmountWithdrawn: BigNumber;

  @Column('decimal', { transformer: new BigNumberNumericTransformer(), nullable: true })
  tokenIncomeUsd: BigNumber;

  @Column('decimal', { transformer: new BigNumberNumericTransformer(), nullable: true })
  amountDepositedChange: BigNumber;

  @Column('decimal', { transformer: new BigNumberNumericTransformer(), nullable: true })
  amountWithdrawnChange: BigNumber;

  @Column('decimal', { transformer: new BigNumberNumericTransformer(), nullable: true })
  amountIncomeChange: BigNumber;

  @Column('decimal', { transformer: new BigNumberNumericTransformer(), default: 0 })
  tokenPriceUsd: BigNumber;

  @Column({ default: '' })
  tokenPriceSource: string;

  @Column('decimal', { transformer: new BigNumberNumericTransformer(), nullable: true })
  tokenAmountAtBlock: BigNumber;

  @Column('decimal', { transformer: new BigNumberNumericTransformer(), nullable: true })
  netTokenAmount: BigNumber;

  @Column('decimal', { transformer: new BigNumberNumericTransformer(), nullable: true, default: 0 })
  ifHeldAllAmountToken: BigNumber;

  @Column('decimal', { transformer: new BigNumberNumericTransformer(), nullable: true, default: 0 })
  ifHeldAmountToken: BigNumber;

  @Column('decimal', { transformer: new BigNumberNumericTransformer(), nullable: true })
  exitedIfHeldAmountToken: BigNumber;

  @Column('decimal', { transformer: new BigNumberNumericTransformer(), nullable: true })
  exitedIfHeldAllAmountToken: BigNumber;

  @Column('decimal', { transformer: new BigNumberNumericTransformer(), default: 0 })
  tokenValueUsd: BigNumber;

  @Column({ default: false })
  isVirtualToken: boolean;

  @Column('decimal', { transformer: new BigNumberNumericTransformer(), nullable: true })
  cumulativeCollectedIncomeAmount: BigNumber;

  @Column('decimal', { transformer: new BigNumberNumericTransformer(), nullable: true })
  cumulativeCollectedIncomeUsd: BigNumber;

  @Column('decimal', { transformer: new BigNumberNumericTransformer(), nullable: true })
  exitedCumulativeCollectedIncomeAmount: BigNumber;

  @Column('decimal', { transformer: new BigNumberNumericTransformer(), nullable: true })
  exitedCumulativeCollectedIncomeUsd: BigNumber;

  @Column('decimal', { transformer: new BigNumberNumericTransformer(), nullable: true })
  baseTokenCostUsd: BigNumber;

  @Column('decimal', { transformer: new BigNumberNumericTransformer(), nullable: true })
  baseTokenPriceUsd: BigNumber;

  @ManyToOne(
    () => UserProtocolPositionSnapshotOperation,
    (userProtocolPositionSnapshotOperation) =>
      userProtocolPositionSnapshotOperation.userProtocolPositionSnapshotOperationTokens,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'userProtocolPositionSnapshotOperationId' })
  public userProtocolPositionSnapshotOperation: Relation<UserProtocolPositionSnapshotOperation>;

  @Column()
  @Index()
  public userProtocolPositionSnapshotOperationId: number;

  @Column({
    type: 'jsonb',
    array: false,
    nullable: true,
  })
  warning: object;

  @CreateDateColumn({ type: 'timestamp without time zone' })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp without time zone',
    nullable: true,
  })
  updatedAt: Date;
}
