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
import { CandidatesComponent } from './HR/candidates/candidates.component';
import { PayrollComponent } from './HR/payroll/payroll.component';
import { HolidaysComponent } from './HR/holidays/holidays.component';
import { SettingSecurityComponent } from './HR/settings/setting-security/setting-security.component';
import { SettingsNavbarComponent } from './HR/settings/settings-navbar/settings-navbar.component';
import { LeaveApprovedComponent } from './HR/leaves/leave-approved/leave-approved.component';
import { LeavePendingComponent } from './HR/leaves/leave-pending/leave-pending.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule,} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeComponent,
    ClientComponent,
    ProjectComponent,
    TaskComponent,
    AttendanceComponent,
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
    CandidatesComponent,
    PayrollComponent,
    HolidaysComponent,
    SettingSecurityComponent,
    SettingsNavbarComponent,
    LeaveApprovedComponent,
    LeavePendingComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatIconModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
