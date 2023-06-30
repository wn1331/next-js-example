import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserController} from '../controller/user.controller';
import {User} from '../entity/user.entity';
import {UserService} from '../service/user.service';
import {UserRepository} from '../repository/user.repository';

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
        }),
        TypeOrmModule.forFeature([User, UserRepository]),
    ],
    controllers: [UserController],
    providers: [UserService, UserRepository],
    exports: [UserService, UserRepository],
})
export class UserModule {
}
