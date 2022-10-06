import { formatDate } from '@angular/common';

export class tmpusers{
    id:number;
    img:string;
    name: string;
    email: string;
    date: string;
    gender: string;
    mobile: string;
    department: string;
    rollNo: string;


    constructor(tempusers){
        {
            this.id=tempusers.id || this.tmpgetRandomID();
            this.img=tempusers.avatar || 'assets/images/user/user1.jpg';
            this.name = tempusers.name || '';
            this.email = tempusers.email || '';
            this.date=formatDate(new Date(),'yyyy-MM-dd','en');
            this.gender = tempusers.gender || '';
            this.mobile = tempusers.mobile || '';
            this.department = tempusers.department || '';
            this.rollNo = tempusers.rollNo || '';
            

        }

    }
    public tmpgetRandomID():string{
        const S4=()=>{
            return (((1+Math.random())* 0x10000)|0).toString(16).substring(1);
        };
        return S4()+S4();
    }
}