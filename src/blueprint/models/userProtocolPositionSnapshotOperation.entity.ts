import { UserProtocolPositionSnapshotOperationToken } from '../models';
import { UserProtocolPositionSnapshot } from '../models';
import { OperationType } from '../models';
import { BigNumberNumericTransformer } from './bigNumberNumericTransformer';
import BigNumber from 'bignumber.js';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user_protocol_position_snapshot_operations' })
@Index(['userProtocolPositionSnapshotId', 'operationType'])
export class UserProtocolPositionSnapshotOperation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: OperationType,
  })
  operationType: OperationType;

  @Column('decimal', { transformer: new BigNumberNumericTransformer(), default: 0 })
  operationValueUsd: BigNumber;

  @Column('decimal', { transformer: new BigNumberNumericTransformer(), default: 0 })
  adjustmentValueUsd: BigNumber;

  @ManyToOne(
    () => UserProtocolPositionSnapshot,
    (userProtocolPositionSnapshot) => userProtocolPositionSnapshot.userProtocolPositionSnapshotOperations,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'userProtocolPositionSnapshotId' })
  public userProtocolPositionSnapshot: Relation<UserProtocolPositionSnapshot>;

  @Column()
  public userProtocolPositionSnapshotId: number;

  @OneToMany(
    () => UserProtocolPositionSnapshotOperationToken,
    (userProtocolPositionSnapshotOperationToken) =>
      userProtocolPositionSnapshotOperationToken.userProtocolPositionSnapshotOperation,
    {
      cascade: true,
      onDelete: 'CASCADE',
    },
  )
  userProtocolPositionSnapshotOperationTokens: Relation<UserProtocolPositionSnapshotOperationToken[]>;

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
