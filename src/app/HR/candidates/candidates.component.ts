import { Component } from '@angular/core';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent {

  user = "assets/CandidateImg/user.png"

  candidates = [
    {
      candidateName: "Akash Pathak",
      appliedFor: 'Developer',
      appliedDate: 'July 14, 2023',
      email: 'akash@gmail.com',
      mobile: '7477000723',
      status: 'Selected',
      resumeImg: "assets/CandidateImg/resumeimg.jpg"
    },
    {
      candidateName: "Pankaj Sahu",
      appliedFor: 'Developer',
      appliedDate: 'July 14, 2023',
      email: 'pankaj@gmail.com',
      mobile: '7477000723',
      status: 'Nonselected',
      resumeImg: "assets/CandidateImg/res.webp"
    },
    {
      candidateName: "Akash Pathak",
      appliedFor: 'Developer',
      appliedDate: 'July 14, 2023',
      email: 'akash@gmail.com',
      mobile: '7477000723',
      status: 'Selected',
    },
    {
      candidateName: "Pankaj Sahu",
      appliedFor: 'Developer',
      appliedDate: 'July 14, 2023',
      email: 'pankaj@gmail.com',
      mobile: '7477000723',
      status: 'non selected',
    },
    {
      candidateName: "Akash Pathak",
      appliedFor: 'Developer',
      appliedDate: 'July 14, 2023',
      email: 'akash@gmail.com',
      mobile: '7477000723',
      status: 'selected',
    },
    {
      candidateName: "Pankaj Sahu",
      appliedFor: 'Developer',
      appliedDate: 'July 14, 2023',
      email: 'pankaj@gmail.com',
      mobile: '7477000723',
      status: 'non selected',
    }, {
      candidateName: "Akash Pathak",
      appliedFor: 'Developer',
      appliedDate: 'July 14, 2023',
      email: 'akash@gmail.com',
      mobile: '7477000723',
      status: 'selected',
      resumeImg: "assets/CandidateImg/resumeimg.jpg"
    },
    {
      candidateName: "Pankaj Sahu",
      appliedFor: 'Developer',
      appliedDate: 'July 14, 2023',
      email: 'pankaj@gmail.com',
      mobile: '7477000723',
      status: 'non selected'
    },
  ]

}
