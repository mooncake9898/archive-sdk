import { UserProtocolPositionSnapshot } from '../models';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user_protocol_positions' })
@Index(['userIdentifier', 'positionIdentifier', 'chainId', 'blueprintId'], { unique: true })
@Index(['userIdentifier', 'positionIdentifier', 'blueprintId'], {})
@Index(['userIdentifier', 'blueprintId'], {})
export class UserProtocolPosition {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  blueprintId: string;

  @Column()
  userIdentifier: string;

  @Column()
  positionIdentifier: string;

  @Column('int')
  chainId: number;

  @OneToMany(
    () => UserProtocolPositionSnapshot,
    (userProtocolPositionSnapshot) => userProtocolPositionSnapshot.userProtocolPosition,
    {
      cascade: true,
      onDelete: 'CASCADE',
    },
  )
  userProtocolPositionSnapshots: Relation<UserProtocolPositionSnapshot[]>;

  @CreateDateColumn({ type: 'timestamp without time zone' })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp without time zone',
    nullable: true,
  })
  updatedAt: Date;
}
