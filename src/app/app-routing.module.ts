import { NgModule, ViewChildren } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './HR/dashboard/dashboard.component';
import { EmployeeComponent } from './HR/employee/employee.component';
import { ClientComponent } from './HR/client/client.component';
import { ProjectComponent } from './HR/project/project.component';
import { TaskComponent } from './HR/task/task.component';
import { AttendanceComponent } from './HR/attendance/attendance.component';
import { JobsComponent } from './HR/jobs/jobs.component';
import { ManagementComponent } from './HR/management/management.component';
import { SettingComponent } from './HR/settings/setting/setting.component';
import { SettingSecurityComponent } from './HR/settings/setting-security/setting-security.component';
import { SettingsNavbarComponent } from './HR/settings/settings-navbar/settings-navbar.component';
import { LeaveApprovedComponent } from './HR/leaves/leave-approved/leave-approved.component';
import { CandidatesComponent } from './HR/candidates/candidates.component';
import { PayrollComponent } from './HR/payroll/payroll.component';
import { HolidaysComponent } from './HR/holidays/holidays.component';

const routes: Routes = [

  {path: 'hr', component: DashboardComponent},
  {path: 'hr/attendance', component: AttendanceComponent},
  {path: 'hr/clients', component: ClientComponent},
  {path: 'hr/employees', component: EmployeeComponent},
  {path: 'hr/jobs', component: JobsComponent},
  {path: 'hr/leaves', component: LeaveApprovedComponent},
  {path: 'hr/managements', component: ManagementComponent},
  {path: 'hr/projects', component: ProjectComponent},
  {path: 'hr/settings',component: SettingsNavbarComponent, 
   children : [
    {path: '', component: SettingComponent},
    {path: "security", component: SettingSecurityComponent}
  ]},

    
  {path: 'hr/tasks', component: TaskComponent},
  {path: 'hr/candidates', component: CandidatesComponent},
  {path: 'hr/payrolls', component: PayrollComponent},
  {path: 'hr/holidays', component: HolidaysComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
