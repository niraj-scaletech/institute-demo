import { Body, Controller, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('user/register')
  public async Register(
    @Body() dto: { email: string; name: string; password: string },
  ) {
    return await this.service.storeUser(dto);
  }

  @Post('institute/register/:userId')
  public async instituteRegister(
    @Param('userId', new ParseUUIDPipe()) userId: string,
    @Body()
    dto: {
      board?: string;
      medium?: string;
      class?: string;
      std?: string;
      subjects?: string[];
    },
  ) {
    return await this.service.instituteRegister(userId, dto);
  }
}
