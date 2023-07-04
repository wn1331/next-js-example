import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './src/user/user.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'jujonghun',
  password: '1234',
  database: 'postgres',
  entities: [User],
  synchronize: false,
};
