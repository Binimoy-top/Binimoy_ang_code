import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LeadComponent} from './lead.component'
import { NgxDatatableComponent } from 'src/app/tables/ngx-datatable/ngx-datatable.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { AllLeadsComponent } from './all-leads/all-leads.component';



const route :Routes=[
{
  path: 'lead',
  component: LeadComponent
},
{
  path: 'all-leads', 
  component: AllLeadsComponent
},
{
  path: 'opportunity',
  component: OpportunityComponent
},



]

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class LeadRoutingModule { }
