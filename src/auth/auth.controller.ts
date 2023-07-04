import {Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get, Request, Res} from '@nestjs/common';
import { AuthService } from './auth.service';
import {AuthGuard} from "./auth.guard";
import {Public} from "../config/conf";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    //로그인
    @HttpCode(HttpStatus.OK)
    @Post('login')
    @Public()
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req){
        return req.user;
    }
}