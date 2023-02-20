import { Injectable } from "@nestjs/common";
import { MailDTO, sentMailDTO } from "src/DTO's/mailDTO";
import { CitizenDTO } from "src/DTO's/citizenDTO";
import { InjectRepository } from "@nestjs/typeorm";
import { Citizen } from "src/entities/citizens.entity";
import { Repository } from "typeorm";

@Injectable()
export class CitizenService {
    constructor(
                @InjectRepository(Citizen)
                private citizenRepo: Repository<Citizen>,
    ){}


    private dammyCitizenData=[{id:1,name:"citizen1",nid:1234567890001,phoneNumber:"01790084943",email:"citizen1@gmail.com"},
                                     {id:2,name:"citizen2",nid:1234567890002,phoneNumber:"01790084943",email:"citizen1@gmail.com"},
                                     {id:3,name:"citizen3",nid:1234567890003,phoneNumber:"01790084943",email:"citizen1@gmail.com"}]

    private dammyMails=[{id:1, senderMail:"1@gmail.com",message:"Hello there",receiverMail:"2@gmail.com"},
                        {id:2, senderMail:"2@gmail.com",message:"Hello there",receiverMail:"3@gmail.com"}]

    private myMails=[];
    private dammyID:number=1;


getCitizenData(){
    return this.dammyCitizenData;
}
citigenSignup(citizen){
    /*this.citizenRepo.save(citizen);
    return "Signup Successful";*/
    
    const citizenData=this.citizenRepo.find(citizen.nid);
    if(citizenData){

        this.citizenRepo.save(citizen);
        return "Signup Successful";
    }
    else{
        return "this NID already have an account";
    }
    
}

citizenProfile(id){
    const info=this.dammyCitizenData.find(id=>id);
    if(!info){
        return "Please enter A Valid Id";
    }
    else{
        return info;
    }
}


sendMail(mail:sentMailDTO){

    //this.dammyMails.push(mail);
    return "Sent";
}
mailbox(mailAddress) {
    let i:number;
    this.myMails=[];
    for(i=0;i<this.dammyMails.length;i++){
    if(this.dammyMails[i].senderMail==mailAddress || this.dammyMails[i].receiverMail==mailAddress){
        
        this.myMails.push(this.dammyMails[i])
    }
    }
    if(this.myMails.length!=0){
        return this.myMails;
    }
    else {
        return "Your Mail box is empty";
    }
    
}

getMailData(){
    return this.dammyMails;
}


}