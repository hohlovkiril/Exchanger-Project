import { SetMetadata } from "@nestjs/common";
import { Role } from "@shared/enums";

export const ROLES_KEY = "auth_roles_key";

export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);