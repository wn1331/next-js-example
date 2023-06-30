import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {CreateUserReqDto} from '../dto/user.signupreqdto';
import {UserService} from '../service/user.service';
import {LoginUserReqDto} from '../dto/user.loginreqdto';
import {JwtAuthGuard} from "../config/user.config";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get('/auth')
    getUser({req}: { req: any }) {
        return req.user;
    }

    @Post('/signup')
    postRegister(@Body() createUserReqDto: CreateUserReqDto) {
        return this.userService.postRegister(createUserReqDto);
    }

    @Post('/login')
    postLogin(@Body() loginUserReqDto: LoginUserReqDto) {
        return this.userService.postLogin(loginUserReqDto);
    }

    @Get('/user-list')
    getUserList(){
        return this.userService.getUsers();
    }
}
