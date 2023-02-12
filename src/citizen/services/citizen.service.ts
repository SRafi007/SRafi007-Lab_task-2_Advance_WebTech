import { Injectable } from "@nestjs/common";
import { MailDTO, sentMailDTO } from "src/DTO's/mailDTO";
import { CitizenDTO } from "src/DTO's/citizenDTO";

@Injectable()
export class CitizenService {


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
    const citizenData=this.dammyCitizenData.find(e=>e.nid==citizen.nid);
    if(!citizenData){

        let tempLength=this.dammyCitizenData.length-1;
        this.dammyID=this.dammyCitizenData[tempLength].id+1;
        let newCitizen={id:this.dammyID,name:citizen.name,nid:citizen.nid,phoneNumber:citizen.phoneNumber,email:citizen.email}
        
        this.dammyCitizenData.push(newCitizen);
        return "Signup Successful";
    }
    else{
        return "this NID already have an account";
    }
    
}

citizenProfile(id){
    const info=this.dammyCitizenData.find(e=>e.id==id);
    if(!info){
        return "Please enter A Valid Id";
    }
    else{
        return info;
    }
}


sendMail(mail:sentMailDTO){
    let tempLength=this.dammyMails.length-1;
    this.dammyID=this.dammyMails[tempLength].id+1;
    let newMail={id:this.dammyID,senderMail:mail.senderMail,message:mail.message,receiverMail:mail.receiverMail}
    this.dammyMails.push(newMail);
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