import { forwardRef, Module } from "@nestjs/common";
import { UserModule } from "../user/user.modue";
import { AuthProvider } from "./providers/auth.provider";
import { AuthController } from "./controllers/auth.controller";

@Module({
  imports: [
    forwardRef(() => UserModule),
  ],
  controllers: [
    AuthController,
  ],
  providers: [
    AuthProvider,
  ],
  exports: [
    AuthProvider,
  ]
})
export class AuthModule {}