import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './HR/dashboard/dashboard.component';
import { EmployeeComponent } from './HR/employee/employee.component';
import { ClientComponent } from './HR/client/client.component';
import { ProjectComponent } from './HR/project/project.component';
import { TaskComponent } from './HR/task/task.component';
import { AttendanceComponent } from './HR/attendance/attendance.component';
import { LeaveComponent } from './HR/leave/leave.component';
import { JobsComponent } from './HR/jobs/jobs.component';
import { ManagementComponent } from './HR/management/management.component';
import { SettingComponent } from './HR/settings/setting/setting.component';
import { NavbarComponent } from './HR/navbar/navbar.component';
import { EmpdashboardComponent } from './Employee/empdashboard/empdashboard.component';
import { EmpprofileComponent } from './Employee/empprofile/empprofile.component';
import { EmpprojectsComponent } from './Employee/empprojects/empprojects.component';
import { EmppayslipComponent } from './Employee/emppayslip/emppayslip.component';
import { EmpattendanceComponent } from './Employee/empattendance/empattendance.component';
import { EmpleaveComponent } from './Employee/empleave/empleave.component';
import { EmpsettingsComponent } from './Employee/empsettings/empsettings.component';
import { SettingSecurityComponent } from './HR/settings/setting-security/setting-security.component';
import { SettingsNavbarComponent } from './HR/settings/settings-navbar/settings-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeComponent,
    ClientComponent,
    ProjectComponent,
    TaskComponent,
    AttendanceComponent,
    LeaveComponent,
    JobsComponent,
    ManagementComponent,
    SettingComponent,
    NavbarComponent,
    EmpdashboardComponent,
    EmpprofileComponent,
    EmpprojectsComponent,
    EmppayslipComponent,
    EmpattendanceComponent,
    EmpleaveComponent,
    EmpsettingsComponent,
    SettingSecurityComponent,
    SettingsNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
