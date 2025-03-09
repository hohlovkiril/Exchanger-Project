import { Role } from "src/common";

export class UserGetManyDto {

}

export class UserCreateDto {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  role: Role;
  password: string;
  avatarId?: number;
}

export class UserUpdateDto {
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  phone?: string;
  role?: Role;
  password?: string;
  avatarId?: number;
}