import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {CreateUserReqDto} from './user.signupreqdto';
import {UserService} from './user.service';
import {Public} from "../config/conf";
import {Roles} from "../role/role.decorator";
import {Role} from "../role/role.enum";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }


    //회원가입
    @Post('/signup')
    @Public()
    postRegister(@Body() createUserReqDto: CreateUserReqDto) {
        return this.userService.postRegister(createUserReqDto);
    }

    //유저 리스트 불러오기
    @Roles(Role.Admin)
    @Get('/user-list')
    getUserList(){
        return this.userService.getUsers();
    }
}
