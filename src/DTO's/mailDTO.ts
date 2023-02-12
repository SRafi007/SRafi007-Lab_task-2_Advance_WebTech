import { IsNotEmpty,IsEmail,Length } from "class-validator";
export class MailDTO{
    @IsNotEmpty()
    id:number;
    @IsEmail()
    @IsNotEmpty()
    senderMail:string;
    @Length(1,300)
    message:string;
    @IsNotEmpty()
    @IsEmail()
    receiverMail:string;
}
export class sentMailDTO{
    @IsEmail()
    @IsNotEmpty()
    senderMail:string;
    @Length(1,300)
    message:string;
    @IsNotEmpty()
    @IsEmail()
    receiverMail:string;
}