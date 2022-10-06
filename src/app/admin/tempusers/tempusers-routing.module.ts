import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {AllTempuserComponent} from './all-tempuser/all-tempuser.component'
import { TempusersComponent } from './tempusers.component';


const routes:Routes=[
  {
    path: '',
    component: TempusersComponent
  },
  {
    path: 'all-temp',
    component: AllTempuserComponent
  }
]

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class TempusersRoutingModule { }
