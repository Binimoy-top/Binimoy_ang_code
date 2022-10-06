import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeadRoutingModule} from './lead-routing.module'
import { MatButtonModule } from '@angular/material/button';
import { LeadComponent } from './lead.component';


import { TablesModule } from 'src/app/tables/tables.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { DialogsComponent } from './dialogs/dialogs.component';
import { MatDialogModule } from '@angular/material/dialog';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AllLeadsComponent } from './all-leads/all-leads.component';
import { LeadsService} from './all-leads/leads.service';
import { FormDialogComponent } from './all-leads/dialogs/form-dialog/form-dialog.component';
import { DeleteDialogComponent } from './all-leads/dialogs/delete/delete.component';
import { MatOptionModule } from '@angular/material/core';




@NgModule({
  declarations: [
    LeadComponent, 
    DialogsComponent,
     OpportunityComponent,
     AllLeadsComponent,
     FormDialogComponent,
     DeleteDialogComponent
    ],
  imports: [
    CommonModule,
    LeadRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    TablesModule,
    MatTableModule,
    MatTabsModule,
    MatOptionModule,
    MatMenuModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    ScrollingModule
  ],
  providers: [LeadsService],


})
export class LeadModule { }
