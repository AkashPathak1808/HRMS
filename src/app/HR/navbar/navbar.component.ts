import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  dashboard = 'assets/DashboardImg/dashboard.svg';
  allEmp = 'assets/DashboardImg/allEmp.svg';
  clients = 'assets/DashboardImg/clients.svg';
  attendence = 'assets/DashboardImg/attendence.svg';
  projects = 'assets/DashboardImg/pro.svg';
  jobs = 'assets/DashboardImg/jobs.svg';
  tasks = 'assets/DashboardImg/tasks.svg';
  candidate = 'assets/DashboardImg/candidate.svg';
  payroll = 'assets/DashboardImg/payroll.svg';
  mgmt = 'assets/DashboardImg/mgmt.svg';
  leaves = 'assets/DashboardImg/leaves.svg';
  hodidays = 'assets/DashboardImg/hodidays.svg';
  settings = 'assets/DashboardImg/settings.svg';
  logout = 'assets/DashboardImg/logout.svg';
  railworldLogo = 'assets/DashboardImg/railworldLogo.svg';
}
