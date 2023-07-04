import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserController} from './user.controller';
import {User} from './user.entity';
import {UserService} from './user.service';
import {UserRepository} from './user.repository';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'jujonghun',
            password: '1234',
            database: 'postgres',
            entities: [User],
            synchronize: true,
            logging:true,
        }),
        TypeOrmModule.forFeature([User, UserRepository]),
    ],
    controllers: [UserController],
    providers: [UserService, UserRepository],
    exports: [UserService, UserRepository],
})
export class UserModule {
}
