import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { LeadsService } from '../../leads.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { Leads } from '../../leads.model';
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass']
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  stdForm: FormGroup;
  students: Leads;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public studentsService: LeadsService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.students.name;
      this.students = data.students;
    } else {
      this.dialogTitle = 'New Students';
      this.students = new Leads({});
    }
    this.stdForm = this.createContactForm();
  }
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      name: [this.students.name],
      title: [this.students.title],

      company: [this.students.company],

      phone: [this.students.phone],
      leadstatus: [this.students.leadstatus],
      owner: [this.students.owner],
      email: [
        this.students.email,
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],

      mobile: [this.students.mobile],
      
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.studentsService.addStudents(this.stdForm.getRawValue());
  }
}
