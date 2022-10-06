import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RolesRoutingModule} from './roles-routing.module';
import { FormDialogsComponent } from './dialogs/form-dialogs/form-dialogs.component'




@NgModule({
  declarations: [
    FormDialogsComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule
  ]
})
export class RolesModule { }
