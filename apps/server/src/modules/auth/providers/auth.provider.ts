import { forwardRef, Inject, Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { comparePassword } from "src/common";
import { AuthLoginDto } from "src/dto";
import { UserEntity } from "src/entities";
import { UserService } from "src/modules/user/providers/user.service";

@Injectable()
export class AuthProvider {

  private readonly logger: Logger = new Logger(AuthProvider.name);

  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  public async validate(access_token: string): Promise<UserEntity> {
    try {
      return await this.jwtService.verifyAsync(access_token);
    } catch {
      throw new UnauthorizedException();
    }
  }

  public async login(payload: AuthLoginDto): Promise<{ access_token: string }> {
    const userByUsername = await this.userService.findOneByUsernameOrNull(payload.usernameOrEmailOrPhone);
    const userByEmail = await this.userService.findOneByEmailOrNull(payload.usernameOrEmailOrPhone);
    const userByPhone = await this.userService.findOneByPhoneOrNull(payload.usernameOrEmailOrPhone);

    if (!userByUsername && !userByEmail && !userByPhone) {
      throw new UnauthorizedException();
    }

    const user = userByUsername ? userByUsername as UserEntity
      : userByEmail ? userByEmail as UserEntity
      : userByPhone as UserEntity;

    const isComparePassword = await comparePassword(payload.password, user.password);

    if (!isComparePassword) {
      throw new UnauthorizedException();
    }

    return {
      access_token: await this.jwtService.signAsync({
        ...user,
        plainPassword: undefined,
        password: undefined,
      })
    }
  }
}