import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'blueprint_metadata' })
@Index(['blueprintId'], { unique: true })
export class BlueprintMetadata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  blueprintId: string;

  @Column({
    type: 'jsonb',
    array: false,
    nullable: false,
  })
  data: object;

  @Column()
  lastSyncAt: number;

  @CreateDateColumn({ type: 'timestamp without time zone' })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp without time zone',
    nullable: true,
  })
  updatedAt: Date;
}
