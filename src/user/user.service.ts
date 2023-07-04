import {Injectable} from '@nestjs/common';
import {UserRepository} from './user.repository';
import {CreateUserReqDto} from './user.signupreqdto';
import {Role} from "../role/role.enum";

export type User = any;
@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {
    } // UserRepository를 주입받기 위해 생성자에 추가

    async postRegister(userData: CreateUserReqDto) {
        // 매개변수로 사용자 데이터를 전달받도록 수정
        // 사용자 데이터로 User 엔티티 인스턴스 생성
        return this.userRepository.createUser(userData); // UserRepository를 통해 사용자 저장 및 반환
    }

    async getUsers(){
        return this.userRepository.getUsers();
    }
    //username이 있나 확인하는 메소드 있으면가져옴
    async findOne(username: string): Promise<User | undefined> {
        return await this.userRepository.findByName(username);
        // return (await this.getUsers()).find(user => user.username === username);
    }
}
