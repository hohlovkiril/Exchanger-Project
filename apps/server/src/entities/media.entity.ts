import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CurrencyEntity } from "./currency.entity";
import { UserEntity } from "./user.entity";

@Entity({
  name: 'media'
})
export class MediaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', unique: false, nullable: true })
  filepath: string;

  @Column({ type: 'text', unique: true, nullable: true })
  filename: string;

  @Column({ type: 'text', unique: false, nullable: true })
  url: string;

  /** Relatations */

  @OneToOne(() => UserEntity, (user) => user.avatar, { onDelete: 'CASCADE', nullable: true })
  @JoinColumn()
  user: UserEntity;

  @OneToOne(() => CurrencyEntity, (currency) => currency.icon, { onDelete: 'CASCADE', nullable: true })
  @JoinColumn()
  currency: CurrencyEntity;
}