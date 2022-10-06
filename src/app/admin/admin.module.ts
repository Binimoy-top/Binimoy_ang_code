import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RolesComponent } from './roles/roles.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { TempusersComponent } from './tempusers/tempusers.component';


@NgModule({
  declarations: [
    RolesComponent,
    ConfigurationComponent,
    TempusersComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
