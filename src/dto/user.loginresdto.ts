export class LoginUserResDto {
    readonly id: number;
    readonly status: string;

    constructor(id: number, status: string) {
        this.id = id;
        this.status = status;
    }
}
