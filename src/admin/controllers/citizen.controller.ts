import {Body, Controller,Delete,Get,Param,Post, Put, Query,Req, UsePipes,ValidationPipe,Session,Patch} from "@nestjs/common";
import { AdminService } from "../services/citizen.service";
import { userDTO } from "src/DTO's/citizenDTO";
import {Request} from "express";
import {AdminDTO} from "src/DTO's/adminDTO";
import { LoginService } from "src/Common/login.service";
import session from "express-session";
import { MailDTO } from "src/DTO's/mailDTO";


@Controller('citizen')
export class CitizenController{
    constructor(private  adminService: AdminService, private loginService: LoginService){}


@Post("/login")
@UsePipes(new ValidationPipe())
adminLogin( @Body()admin:AdminDTO){
    return this.loginService.adminLogin(admin);
}
@Get("/profile")
adminProfile(@Session() session:any ){
    console.log(session.id);
    session("uname","rafi");
    return session["uname"];

}

@Post("/mail/:admin")
sendMail(@Body()mail:MailDTO,@Param('admin')admin:string){


        return this.adminService.sendMail(mail,admin);
}
@Get("/mailbox")
viewMailBox(@Query("sort")sortBy:string){
    return sortBy;

}

@Get("/dashboard")
dashboard(){
    let tempAdminCount=this.loginService.adminCount();
    let tempUserData=this.adminService.getUsers();
    let userCount=tempUserData.length;
    return "Active Admin:"+tempAdminCount+"\n Total users:"+userCount;
}
@Get("/users")
getUsers(){
    return this.adminService.getUsers();
}
@Get("/users/:id")
getUserById(@Param("id") Id:string){
    return this.adminService.getUserById(Id);
}
@Get("/que")
getQuary(@Query("sort")sortBy:boolean)
{
    return sortBy;
}
@Post("/addUser")
addUser(@Body() newUser:userDTO ){
    return this.adminService.insertUser(newUser);
}
@Delete("/delete/:id")
deleteUserById(@Param("id")Id:string){
    return this.adminService.deleteUserById(Id);
}
@Put("/update/:id")
updateUserById(@Param("id")Id:string, @Body("Name")Name:string,@Body("Mail")Mail:string ){
    const user={Id:Id, Name:Name, Mail:Mail};
    
    return this.adminService.updateUserById(user);
}
@Patch("/employee/:id")
getEmployeeById(@Param("id")Id:string){
    return this.adminService.getEmployeeById(Id);
}

}