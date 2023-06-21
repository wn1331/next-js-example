import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserReqDto } from '../dto/user.signupreqdto';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  postRegister(@Body() createUserReqDto: CreateUserReqDto) {
    return this.userService.postRegister(createUserReqDto);
  }
}
