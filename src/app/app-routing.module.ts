import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './HR/dashboard/dashboard.component';
import { EmployeeComponent } from './HR/employee/employee.component';
import { ClientComponent } from './HR/client/client.component';
import { ProjectComponent } from './HR/project/project.component';
import { TaskComponent } from './HR/task/task.component';
import { AttendanceComponent } from './HR/attendance/attendance.component';
import { JobsComponent } from './HR/jobs/jobs.component';
import { ManagementComponent } from './HR/management/management.component';
import { SettingComponent } from './HR/setting/setting.component';
import { LeaveApprovedComponent } from './HR/leaves/leave-approved/leave-approved.component';

const routes: Routes = [

  {path: 'hr', component: DashboardComponent},
  {path: 'hr/attendance', component: AttendanceComponent},
  {path: 'hr/clients', component: ClientComponent},
  {path: 'hr/employees', component: EmployeeComponent},
  {path: 'hr/jobs', component: JobsComponent},
  {path: 'hr/leaves', component: LeaveApprovedComponent},
  {path: 'hr/managements', component: ManagementComponent},
  {path: 'hr/projects', component: ProjectComponent},
  {path: 'hr/settings', component: SettingComponent},
  {path: 'hr/tasks', component: TaskComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
