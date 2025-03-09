import { UserType } from "../../../common/types";

export type ChatData = {
  messages: ChatMessageType[];
}

export type ChatDialog = ChatData & {
  type: 'dialog';
  users: [UserType, UserType];
}

export type ChatGroup = ChatData & {
  type: 'group';
  name: string;
  avatar?: string;
}

export type ChatType = ChatDialog | ChatGroup;

export type ChatMessageType = {
  id: number;
  text: string;
  isSelf: boolean;
  user?: UserType;
  createdAt: Date;
}