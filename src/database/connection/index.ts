import * as path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

const entityFolder = path.join(__dirname, '../entity/**/*.entity.{ts,js}');
const migrationFolder = path.join(__dirname, '../migrations/**/*.{ts,js}');

export const ormConfig: DataSourceOptions = {
  type: 'postgres',
  replication: {
    master: {
      host: process.env.HOST || 'localhost',
      port: +process.env.PORT || 5432,
      password: process.env.PASSWORD || 'admin',
      username: process.env.USERNAME || 'postgres',
      database: process.env.DATABASE || 'demo',
    },
    slaves: [],
  },
  entities: [entityFolder],
  migrations: [migrationFolder],
  migrationsTableName: 'migrations',
  logging: true,
};

export const AppDataSource = new DataSource(ormConfig);
