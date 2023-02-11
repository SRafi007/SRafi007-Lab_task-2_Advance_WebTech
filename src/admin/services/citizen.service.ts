import { Injectable } from "@nestjs/common";
import { MailDTO } from "src/DTO's/mailDTO";
import { userDTO } from "src/DTO's/citizenDTO";

@Injectable()
export class AdminService {


    private DammyData=[{Id:"1",Name:"Rafi1",Mail:"1@gmail.com"},
                        {Id:"2",Name:"Rafi2",Mail:"2@gmail.com"},
                        {Id:"3",Name:"Rafi3",Mail:"3@gmail.com"}]
    
    private DammyEmployData=[{Id:"11",Name:"Levi1",Mail:"levi1@gmail.com"},
                            {Id:"12",Name:"Levi2",Mail:"levi2@gmail.com"},
                            {Id:"13",Name:"Levi3",Mail:"levi3@gmail.com"}
                            ]

    private DammyMails=[];

sendMail(mail:MailDTO,admin){
    this.DammyMails.push(mail);
    return "Hello :-"+admin+"\n Your Mail Successfully sent to User:"+mail.ReciverId;
}
    
viewMailBox(sortBy) {
    return "SortBy:"+sortBy;
}

getUsers() {
    return this.DammyData;
}
getUserById(id){
    var count=0;

    
    while(count<this.DammyData.length){

        if(this.DammyData[count].Id===id)
        {
            return this.DammyData[count];
        }
        count++;

    }
    return "Enter a Valid Used Id";
}
insertUser(user) {
    this.DammyData.push(user);
    return this.DammyData;
}
deleteUserById(id) {
    var count=0;

    while(count<this.DammyData.length){

        if(this.DammyData[count].Id===id)
        {
            delete this.DammyData[count];
            return "Deleted";
        }
        count++;

    }
    return "Enter a Valid Used Id";
}
updateUserById(user:userDTO){
    const id=user.Id;
    const index=this.DammyData.findIndex(e=>e.Id===user.Id);
    if(!index) {
        return "Enter a valid Id";
    }
    this.DammyData[index]=user;
    return"Updated";

}
getEmployeeById(Id: string) {
    let employee=this.DammyEmployData.find(e=>e.Id===Id);
    return employee;
}
}