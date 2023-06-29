import {Body, Controller, Post} from '@nestjs/common';
import {CreateUserReqDto} from '../dto/user.signupreqdto';
import {UserService} from '../service/user.service';
import {LoginUserReqDto} from '../dto/user.loginreqdto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Post('/signup')
    postRegister(@Body() createUserReqDto: CreateUserReqDto) {
        return this.userService.postRegister(createUserReqDto);
    }

    @Post('/login')
    postLogin(@Body() loginUserReqDto: LoginUserReqDto) {
        return this.userService.postLogin(loginUserReqDto);
    }
}
