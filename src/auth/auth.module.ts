import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {UserModule} from '../user/user.module';
import {jwtConstants} from './auth.constants'
import {JwtModule} from "@nestjs/jwt";
import {APP_GUARD} from "@nestjs/core";
import {AuthGuard} from "./auth.guard";

@Module({
    imports: [UserModule,
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '60s'},
        }),
    ],
    providers: [AuthService,{
        provide:APP_GUARD,
        useClass:AuthGuard,
    }],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule {
}