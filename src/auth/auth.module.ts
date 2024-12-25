import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepo } from '../repo';
import { DataSource } from 'typeorm';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserRepo, DataSource],
})
export class AuthModule {}
