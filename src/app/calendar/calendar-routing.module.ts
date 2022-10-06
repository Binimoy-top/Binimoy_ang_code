import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { FormDialogComponent } from './dialogs/form-dialog/form-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarComponent
  },
  {
    path: 'form',
    component: FormDialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule {}
