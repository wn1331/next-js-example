import {Module} from '@nestjs/common';
import {AppController} from '../controller/app.controller';
import {AppService} from '../service/app.service';
import {UserModule} from './user.module';
import {JwtAuthGuard} from "../config/user.config";

@Module({
    imports: [UserModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
