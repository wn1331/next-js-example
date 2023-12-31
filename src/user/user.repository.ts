import {Repository} from 'typeorm';
import {User} from './user.entity';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {CreateUserReqDto} from './user.signupreqdto';

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>,
    ) {
    }
    async findByName(name: string){
        return await this.repository.createQueryBuilder('user')
            .where('user.username = :username',{username:name})
            .getOne();
    }

    async createUser(user: CreateUserReqDto): Promise<User> {
        return this.repository.save(user);
    }

    async getUsers(): Promise<User[]> {
        return this.repository.find();
    }

    async deleteUser(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
