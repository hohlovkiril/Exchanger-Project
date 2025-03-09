import { Body, Controller, Get, Logger, Post } from "@nestjs/common";
import { AuthProvider } from "../providers/auth.provider";
import { AuthLoginDto } from "src/dto";
import { Public, User } from "src/common";

@Controller('/api/auth')
export class AuthController {

  private readonly logger: Logger = new Logger(AuthController.name);

  constructor(
    private readonly provider: AuthProvider,
  ) {}

  @Get()
  /**
   * curl -X GET http://localhost:3000/auth -H "Authorization: Bearer %access_token%"
   */
  public async validateToken(
    @User() user,
  ) {
    return user;
  }

  @Public()
  @Post('/login')
  // curl -X POST http://localhost:3000/auth/login -d '{ "usernameOrEmailOrPhone": "%login%", "password": "%password%" }' -H "Content-Type: application/json"
  public async login(
    @Body() dto: AuthLoginDto,
  ) {
    return await this.provider.login(dto);
  }
}