import { CurrencyType } from "src/common";
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RateEntity } from "./rate.entity";
import { MediaEntity } from "./media.entity";

@Entity({
  name: 'currency'
})
export class CurrencyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', unique: true, nullable: false, })
  label: string;

  @Column({ type: 'text', unique: true, nullable: false })
  symbol: string;

  @Column({ type: 'text', unique: false, nullable: true })
  apiSymbol: string;

  @Column({ type: 'int', nullable: false, default: 10, })
  precision: number;

  @Column({ type: 'int', nullable: false, default: 2 })
  scale: number;

  @Column({ type: 'text', unique: false, nullable: true })
  regex: string;

  @Column({ type: 'enum', enum: CurrencyType, default: CurrencyType.CRYPTO })
  type: CurrencyType;

  @Column({ type: 'float', nullable: false })
  minimal: number;

  @Column({ type: 'float', nullable: false })
  reserve: number;

  /** Relatations */

  @OneToOne(() => MediaEntity, (media) => media.currency, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn()
  icon: MediaEntity;

  @OneToMany(() => RateEntity, (rate) => rate.clientCurrencyBuy, { cascade: true })
  buyRates: RateEntity[];

  @OneToMany(() => RateEntity, (rate) => rate.clientCurrencySell, { cascade: true })
  sellRates: RateEntity[];

  /** Actions */

  @BeforeInsert()
  setSymbols() {
    this.symbol = this.symbol.toLocaleLowerCase();
    this.apiSymbol = this.apiSymbol.toLocaleLowerCase();
  }

  @BeforeUpdate()
  updateSymbols() {
    this.setSymbols();
  }
}