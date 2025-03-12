import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {
  AnonymUser,
  OrderStatus,
  RecipientData,
} from "src/common";
import { UserEntity } from "./user.entity";

@Entity({
  name: 'order'
})
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('uuid')
  uuid: number;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.WAITING_CONFIRM })
  status: OrderStatus;

  @Column({ type: 'json' })
  recipientData: RecipientData;

  @Column({ type: 'text', nullable: false })
  rateCacheData: string;

  @Column({ type: 'float', nullable: false })
  clientBuy: number;

  @Column({ type: 'float', nullable: false })
  clientSell: number;

  @Column({ type: 'json', nullable: true })
  clientAnonym: AnonymUser;

  @Column({ type: 'text', nullable: false })
  clientCacheData: string;
  
  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  public createdAt: Date;

  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  public updatedAt: Date;

  /** Relatations */

  @ManyToOne(() => UserEntity, (client) => client.orders, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn()
  client: UserEntity;
}