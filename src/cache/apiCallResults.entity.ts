import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@Index(['chainId', 'key'], { unique: true })
export class ApiCallResults {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 1 })
  chainId: number;

  @Column()
  key: string;

  @Column({
    type: 'jsonb',
    array: false,
    nullable: false,
  })
  value: object;

  @CreateDateColumn({ type: 'timestamp without time zone' })
  createdAt: Date;
}
