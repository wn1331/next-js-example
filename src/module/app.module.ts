import {Module} from '@nestjs/common';
import {AppController} from '../controller/app.controller';
import {AppService} from '../service/app.service';
import {UserModule} from './user.module';
import {AuthModule} from "./auth.module";

@Module({
    imports: [UserModule,AuthModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
