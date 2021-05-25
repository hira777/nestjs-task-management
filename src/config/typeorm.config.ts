import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 15432,
  username: 'admin',
  password: 'admin',
  database: 'taskmanagement',
  autoLoadEntities: true,
  synchronize: true,
};
