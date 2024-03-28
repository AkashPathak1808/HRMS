import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  user = "assets/CandidateImg/user.png";
  case = "assets/Jobs/briefcase.svg";

  activeJobs = [
    {
      title: "UI/UX Designer",
      designation: 'Design',
      department: 'Design',
      time: 'Full Time',
      remote: true,
      location: 'California, USA',
      ctc: '$3600/Month'
    },
    {
      title: "UI/UX Designer",
      designation: 'Design',
      department: 'Design',
      time: 'Full Time',
      remote: false,
      location: 'California, USA',
      ctc: '$3600/Month'
    },
    {
      title: "UI/UX Designer",
      designation: 'Design',
      department: 'Design',
      time: 'Full Time',
      remote: true,
      location: 'California, USA',
      ctc: '$3600/Month'
    },
    {
      title: "UI/UX Designer",
      designation: 'Design',
      department: 'Design',
      time: 'Full Time',
      remote: false,
      location: 'California, USA',
      ctc: '$3600/Month'
    }
  ]

  inactiveJobs = [
    {
      title: "UI/UX Designer",
      designation: 'Design',
      department: 'Design',
      time: 'Full Time',
      remote: true,
      location: 'California, USA',
      ctc: '$3600/Month'
    },
    {
      title: "UI/UX Designer",
      designation: 'Design',
      department: 'Design',
      time: 'Full Time',
      remote: false,
      location: 'California, USA',
      ctc: '$3600/Month'
    },
    {
      title: "UI/UX Designer",
      designation: 'Design',
      department: 'Design',
      time: 'Full Time',
      remote: true,
      location: 'California, USA',
      ctc: '$3600/Month'
    },
    {
      title: "UI/UX Designer",
      designation: 'Design',
      department: 'Design',
      time: 'Full Time',
      remote: false,
      location: 'California, USA',
      ctc: '$3600/Month'
    }
  ]
}
