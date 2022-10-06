import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Leads } from './leads.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';

@Injectable({
  providedIn: 'root'
})
export class LeadsService extends UnsubscribeOnDestroyAdapter{
  private readonly API_URL = 'assets/data/leads.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Leads[]> = new BehaviorSubject<Leads[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Leads[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  getAllStudentss(): void {
    this.subs.sink = this.httpClient.get<Leads[]>(this.API_URL).subscribe(
      (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + ' ' + error.message);
      }
    );
  }addStudents(leads: Leads): void {
    this.dialogData = leads;

    /*  this.httpClient.post(this.API_URL, students).subscribe(data => {
      this.dialogData = students;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateStudents(students: Leads): void {
    this.dialogData = students;

    /* this.httpClient.put(this.API_URL + students.id, students).subscribe(data => {
      this.dialogData = students;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteStudents(id: number): void {
    console.log(id);

    /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(id);
      },
      (err: HttpErrorResponse) => {
         // error code here
      }
    );*/
  }
}
