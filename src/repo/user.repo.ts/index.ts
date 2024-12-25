import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../database/entity/user.entity';
import { DataSource, Repository } from 'typeorm';
import { AppDataSource } from '../../database/connection';

export class UserError extends Error {
  constructor(message: string) {
    super(message);
  }
}

@Injectable()
export class UserRepo extends Repository<UserEntity> {
  protected connection = AppDataSource;
  constructor(protected dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }
}
