import { SetMetadata } from "@nestjs/common";

export const PUBLIC_KEY = "auth_public_key";

export const Public = () => SetMetadata(PUBLIC_KEY, true);