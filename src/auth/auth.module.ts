import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserInstituteRepo, UserRepo } from '../repo';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserRepo, UserInstituteRepo],
})
export class AuthModule {}
