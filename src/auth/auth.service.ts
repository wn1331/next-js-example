import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from '../user/user.service';
import {JwtService} from '@nestjs/jwt'

@Injectable()
export class AuthService {
    constructor(private userService: UserService,
                private jwtService: JwtService
    ) {
    }

    async signIn(username: string, pass: string): Promise<any> {
        //여기서 에러 터지면 username 없음 에러
        const user = await this.userService.findOne(username);
        if (!user) {
            throw new UnauthorizedException('User not found');
        }
        if (user?.password !== pass) {
            //비밀번호 오류 에러
            throw new UnauthorizedException('Passwords do not match');
        }

        // password 변수에 user.password 값을 할당합니다.
        // ...result는 user 객체에서 password를 제외한 모든 나머지 속성들을 result 객체에 할당합니다.
        // const {password, ...result} = user;
        const payload = {
            id: user.id,
            username: user.username
        }

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}