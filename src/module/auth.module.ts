import {Module} from '@nestjs/common';
import {AuthService} from '../service/auth.service';
import {AuthController} from '../controller/auth.controller';
import {UserModule} from './user.module';
import {jwtConstants} from './auth.constants'
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports: [UserModule,
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '60s'},
        }),
    ],
    providers: [AuthService],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule {
}