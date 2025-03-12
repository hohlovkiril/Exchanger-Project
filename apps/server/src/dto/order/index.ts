import { AnonymUser, RecipientData } from "src/common";
import { UserEntity } from "src/entities";

export class OrderGetManyDto {}

export class OrderCreateDto {
  rateId: number;
  recipientData: RecipientData;
  clientBuy: number;
  clientSell: number;
  anonymUser?: AnonymUser;
  client?: UserEntity;
}

export class OrderUpdateDto {}