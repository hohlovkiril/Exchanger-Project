import { CanActivate, ExecutionContext, ForbiddenException, Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { extractTokenFromHeader, Permission, PERMISSION_KEY, PUBLIC_KEY, Role, ROLES_KEY } from "src/common";
import { AuthProvider } from "src/modules/auth/providers/auth.provider";

@Injectable()
export class AuthHttpGuard implements CanActivate {

  private readonly logger: Logger = new Logger(AuthHttpGuard.name);

  constructor(
    private readonly reflector: Reflector,
    private readonly authProvider: AuthProvider,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const isPublic = this.reflector.getAllAndOverride<boolean>(PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const Roles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const Permissions = this.reflector.getAllAndOverride<Permission[]>(PERMISSION_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const token = extractTokenFromHeader(request);

    try {
      if (token) {
        request['user'] = await this.authProvider.validate(token);
      }
    } catch {}

    if (isPublic) {
      return true;
    }

    if (request['user'] === undefined) {
      throw new UnauthorizedException();
    }

    if (Roles && !Roles.includes(request['user'].role)) {
      throw new ForbiddenException();
    }

    // if (Permissions && Permissions.includes(request['user'].permissions)) {
    //   throw new ForbiddenException();
    // }

    return true;
  }
}