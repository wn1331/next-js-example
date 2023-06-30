import {Repository} from 'typeorm';
import {User} from '../entity/user.entity';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {CreateUserReqDto} from '../dto/user.signupreqdto';

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>,
    ) {
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
