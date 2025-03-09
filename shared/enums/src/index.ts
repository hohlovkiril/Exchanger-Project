// Authorization 

export enum Role {
  Root,
  Admin,
  Client,
  Anonym,
}

export enum Permission {
  
}

// Currency

export enum CurrencyType {
  CRYPTO,
  FIAT,
}

// Order

export enum OrderStatus {
  WAITING_CONFIRM,
  WAITING_PAYMENT,
  PROCESSING,
  FINISH,
  DECLINE_AUTO,
  DECLINE_USER,
  DECLINE_ADMIN,
}