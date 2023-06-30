import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {CreateUserReqDto} from '../dto/user.signupreqdto';
import {UserService} from '../service/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }


    //회원가입
    @Post('/signup')
    postRegister(@Body() createUserReqDto: CreateUserReqDto) {
        return this.userService.postRegister(createUserReqDto);
    }

    //유저 리스트 불러오기
    @Get('/user-list')
    getUserList(){
        return this.userService.getUsers();
    }
}
