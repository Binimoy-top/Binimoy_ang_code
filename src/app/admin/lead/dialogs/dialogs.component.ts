import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.sass']
})
export class DialogsComponent  implements OnInit{

  stdForm:FormGroup;

  constructor(
    public dialogRef:MatDialogRef<DialogsComponent>,
    @Inject(MAT_DIALOG_DATA)public data
    ) { }
ngOnInit(): void {
   
}

  onNoClick(){
    this.dialogRef.close();
  }
  submit(){
    
  }

  confirmAdd(){

  }

}
