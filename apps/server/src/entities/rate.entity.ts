import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CurrencyEntity } from "./currency.entity";

@Entity({
  name: 'rate',
})
export class RateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'boolean', default: false })
  status: boolean;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'boolean', default: false })
  autoUpdatePrice: boolean;

  /** Ralatations */

  @ManyToOne(() => CurrencyEntity, (currency) => currency.buyRates, { onDelete: 'CASCADE' })
  @JoinColumn()
  clientCurrencyBuy: CurrencyEntity;

  @ManyToOne(() => CurrencyEntity, (currency) => currency.sellRates, { onDelete: 'CASCADE' })
  @JoinColumn()
  clientCurrencySell: CurrencyEntity;
}