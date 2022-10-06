import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { tmpusers } from './tempuser.model';

@Injectable()
export class 
TempusersService 
extends UnsubscribeOnDestroyAdapter{   //A class that automatically unsubscribes all observables when the object gets destroyed

  private readonly API_URL='assets/data/tempuser.json'
  isTblLoading=true;
  dataChange:BehaviorSubject<tmpusers[]> = new BehaviorSubject<tmpusers[]>([]);
  // temporary holds data from the dialogs
  dialogData:any;

  constructor(private httpclient:HttpClient) {
    super();  
   }

   get data():tmpusers[]{
     return this.dataChange.value;
   }
  // Crud 
  getAllTempUser():void {
    this.subs.sink=this.httpclient.get<tmpusers[]>(this.API_URL).subscribe(     // * Subscription sink that holds Observable subscriptions until you call unsubscribe on it in ngOnDestroy.
      (data)=>
      {
        this.isTblLoading=false;
        this.dataChange.next(data);
      },
      (error:HttpErrorResponse)=>{
        this.isTblLoading=false;
        console.log(error.name +' '+ error.message);
      }

    );
  }
//---get all student finish

}
