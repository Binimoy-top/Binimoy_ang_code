import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTempuserComponent } from './all-tempuser/all-tempuser.component';
import { TempusersRoutingModule } from './tempusers-routing.module';
import { TempusersService } from './all-tempuser/tempusers.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';




@NgModule({
  declarations: [
    AllTempuserComponent
  ],
  imports: [
    CommonModule,
    TempusersRoutingModule,
    MatDialogModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule

  ],
  providers:[TempusersService]
})
export class TempusersModule { }
