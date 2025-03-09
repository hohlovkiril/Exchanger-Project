import { CurrencyType } from "src/common";

export class CurrencyGetManyDto {}

export class CurrencyCreateDto {
  label: string;
  symbol: string;
  precision?: number;
  scale?: number;
  regex?: string;
  type?: CurrencyType;
  minimal: number;
  reserve: number;
  iconId?: number;
}

export class CurrencyUpdateDto {
  label?: string;
  symbol?: string;
  precision?: number;
  scale?: number;
  regex?: string;
  type?: CurrencyType;
  minimal?: number;
  reserve?: number;
  iconId?: number;
}