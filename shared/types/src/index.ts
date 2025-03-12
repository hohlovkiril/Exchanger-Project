//

export type AnonymUser = {
  fullName: string;
  email: string;
  phone?: string;
}

// Order

export type RecipientCryptoData = {
  type: 'crypto';
}

export type RecipientFiatData = {
  type: 'fiat';
}

export type RecipientData = RecipientCryptoData | RecipientFiatData;