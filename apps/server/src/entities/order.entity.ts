import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {
  OrderStatus,
  RecipientData,
} from "src/common";

@Entity({
  name: 'order'
})
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', unique: true, nullable: false })
  publicId: number;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.WAITING_CONFIRM })
  status: OrderStatus;

  @Column({ type: 'json' })
  recipientData: RecipientData;

  @Column({ type: 'float', nullable: false })
  clientBuy: number;

  @Column({ type: 'float', nullable: false })
  clientSell: number;
  
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
}