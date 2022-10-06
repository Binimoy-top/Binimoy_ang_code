import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'teachers',
    loadChildren: () =>
      import('./teachers/teachers.module').then((m) => m.TeachersModule),
  },
  {
    path: 'roles',
    loadChildren: () =>
      import('./roles/roles.module').then((m) => m.RolesModule),
  },
  {
    path: 'config',
    loadChildren: () =>
      import('./configuration/configuration.module').then((m) => m.ConfigurationModule),
  },
  {
    path: 'lead',
    loadChildren: () =>
      import('./lead/lead.module').then((m) => m.LeadModule),
      
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./students/students.module').then((m) => m.StudentsModule),
  },
  {
    path: 'temp',
    loadChildren: () =>
      import('./tempusers/tempusers.module').then((m) => m.TempusersModule),
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    path: 'library',
    loadChildren: () =>
      import('./library/library.module').then((m) => m.LibraryModule),
  },
  {
    path: 'departments',
    loadChildren: () =>
      import('./departments/departments.module').then(
        (m) => m.DepartmentsModule
      ),
  },
  {
    path: 'staff',
    loadChildren: () =>
      import('./staff/staff.module').then((m) => m.StaffModule),
  },
  {
    path: 'holidays',
    loadChildren: () =>
      import('./holidays/holidays.module').then((m) => m.HolidaysModule),
  },
  {
    path: 'fees',
    loadChildren: () => import('./fees/fees.module').then((m) => m.FeesModule),
  },
  {
    path: 'tables',
    loadChildren: () => import('src/app/tables/tables.module').then((m) =>m.TablesModule ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
