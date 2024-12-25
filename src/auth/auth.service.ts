import { Injectable } from '@nestjs/common';
import { UserError, UserInstituteRepo, UserRepo } from '../repo';
import { randomUUID } from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepo: UserRepo,
    private readonly userInstituteRepo: UserInstituteRepo,
  ) {}

  public async storeUser(dto: {
    email: string;
    name: string;
    password: string;
  }) {
    const user = await this.userRepo.findOne({
      where: {
        email: dto.email,
      },
    });
    if (user) throw new UserError('User already exist');

    const newUser = await this.userRepo.save({
      id: randomUUID(),
      email: dto.email,
      name: dto.name,
      password: dto.password,
      created_at: new Date(),
      update_at: new Date(),
    });
    console.log('user :>> ', newUser);

    return newUser;
  }

  public async instituteRegister(
    userId: string,
    dto: {
      board?: string;
      medium?: string;
      class?: string;
      std?: string;
      subjects?: string[];
    },
  ) {
    const user = await this.userRepo.findOne({
      where: {
        id: userId,
      },
    });
    if (!user) throw new UserError('User not exist');

    const entity = await this.userInstituteRepo.save({
      board: dto.board,
      class: dto.class,
      subjects: dto.subjects,
      medium: dto.medium,
    });

    return entity;
  }
}
