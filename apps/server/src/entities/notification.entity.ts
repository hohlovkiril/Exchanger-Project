import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { NotificationVariants } from 'src/common'

@Entity({
  name: 'notification'
})
export class NotificationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', unique: false, nullable: true })
  clientId: number;

  @Column({ type: 'enum', enum: NotificationVariants, default: NotificationVariants.Info })
  variant: NotificationVariants;

  @Column({ type: 'text', unique: false, nullable: false })
  text: string;

  @Column({ type: 'boolean', unique: false, nullable: false, default: false })
  checked: boolean;

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