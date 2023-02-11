import { IsNotEmpty,Length } from "class-validator";
export class AdminDTO{

    @IsNotEmpty()
    Uname: string;
    @IsNotEmpty()
    @Length(2,5)
    Password: string;
}