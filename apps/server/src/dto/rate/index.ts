export class RateGetManyDto {}

export class RateCreateDto {
  status: boolean;
  price: number;
  autoUpdatePrice: boolean;
  clientCurrencyBuyId: number;
  clientCurrencySellId: number;
}

export class RateUpdateDto {
  status?: boolean;
  price?: number;
  autoUpdatePrice?: boolean;
}