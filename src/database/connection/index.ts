import * as path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

const entityFolder = path.join(__dirname, '../entity/**/*.entity.{ts,js}');
const migrationFolder = path.join(__dirname, '../migrations/**/*.{ts,js}');

export const ormConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: +process.env.DB_PORT || 5432,
  password: process.env.DB_PASSWORD || 'admin',
  username: process.env.DB_USERNAME || 'postgres',
  database: process.env.DB_DATABASE || 'demo',
  entities: [entityFolder],
  migrations: [migrationFolder],
  migrationsTableName: 'migrations',
};

export const AppDataSource = new DataSource(ormConfig);
