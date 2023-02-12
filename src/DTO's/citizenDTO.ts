import { IsNotEmpty,IsNumber,maxLength,minLength,Length,IsEmail } from "class-validator";
export class CitizenDTO{
    @IsNotEmpty({message:"Please Enter Id"})
    @IsNumber()
    id:Number;
    @IsNotEmpty({message:"Please Enter Your Name"})
    name:string;
    @IsNotEmpty({message:"Please Enter Your Nid Number"})
    nid:string;
    @Length(11,11)
    @IsNotEmpty({message:"Please Enter Your Nid Number"})
    phoneNumber:string;
    @IsEmail()
    email:string;
}
export class CitizenLoginDTO{
    @IsNotEmpty({message:"Please Enter Your Name"})
    name:string;
    @IsNotEmpty({message:"Please Enter Your Nid Number"})
    nid:string;
}
export class CitizenSignupDTO{
    @IsNotEmpty({message:"Please Enter Your Name"})
    name:string;
    @IsNotEmpty({message:"Please Enter Your Nid Number"})
    nid:string;
    @Length(11,11)
    @IsNotEmpty({message:"Please Enter Your Nid Number"})
    phoneNumber:string;
    @IsEmail()
    email:string;
}