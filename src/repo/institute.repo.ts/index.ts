import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { AppDataSource } from '../../database/connection';
import { UserInstituteEntity } from 'src/database/entity';

export class UserInstituteError extends Error {
  constructor(message: string) {
    super(message);
  }
}

@Injectable()
export class UserInstituteRepo extends Repository<UserInstituteEntity> {
  protected connection = AppDataSource;
  constructor(protected dataSource: DataSource) {
    super(UserInstituteEntity, dataSource.createEntityManager());
  }
}
