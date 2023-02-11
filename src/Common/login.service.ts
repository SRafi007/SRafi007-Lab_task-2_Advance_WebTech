import { Injectable } from "@nestjs/common";
import { AdminDTO } from "src/DTO's/adminDTO";
import { Cookie } from "express-session";
import * as cookie from "cookie-parser";


@Injectable()
export class LoginService{
    
    private dammyAdminData=[{Uname:"Admin1",Password:"1234"},
    {Uname:"Admin2",Password:"1234"}]
    
    uname:string;
    adminLogin(admin){
        const adminData=this.dammyAdminData.find(e=>e.Uname==admin.Uname && e.Password==admin.Password)
        if(!adminData){return "UserName Or Password Invalid"}
        else{
            cookie("uname",admin.Uname);
                
            return "Login Successful"}
        
    }

    adminCount(){
        return this.dammyAdminData.length;
    }
}