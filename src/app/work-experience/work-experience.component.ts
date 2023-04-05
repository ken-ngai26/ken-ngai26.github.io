import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Front End Developer',
      company: 'Freelancer',
      duration: 'Jun 2022 - Now',
      description: [
        'Design and create landing page.',
        'Design and create personal website',
      ],
    },
    {
      role: 'Covid-19 Tracker Front End/ Back End Developer ',
      company: 'SFU Comparative Programming Languages Term Project',
      duration: 'Jan 2021 - Apr 2021',
      description: [
        'Built an Web Application for tracking Covid-19 using JavaScript with React for front-end and Flask Python + SQLAlchemy for  back-end '
        ,'Deployed using Docker containers for the app '
        ,'Created a semi real-time map displaying Covid-19 case in the region by pulling data using API '
        ,'Managed database using Python for accessing and sending information to database '
        ,'Created personal health statuses and store vaccine passport '
        ,'Technology used: React, JavaScript, Python, Flask, C, SQLAlchemy, Docker '
      ],
    },
    {
      role: 'Photo Book Maker/ Front End Developer  ',
      company: 'BCIT Link Magazine Co-op',
      duration: 'April 2018 - June 2018 ',
      description: [
        'Researched and designed for a web-based photo book maker for BCIT Link Magazine'
        ,'Provided Documentation of the design and specification requirements'
        ,'Created a Visual Interactive Prototype of the photo book maker'
        ,'Transferred the design and document to the development team'
        ,'Technology used: InVision, Sketch, React, JavaScript '

      ],
    },
    {
      role: 'CrimeTracker IOS Application / Back End Developer',
      company: '(SFU Software Engineering I Term Project Sponsored by Sergeant Kevin Bernardin, Community Policing Services Unit, Vancouver Police Department',
      duration: 'Jan 2015 - Apr 2015',
      description: [
        'Worked as a team in building an iOS Application for VPD using Objective-C for front-end and PHP + MySQL for back-end'
        ,'Worked in an agile environment along with 5 other colleagues'
        ,'Designed a relational database and developed user management system, user report system and basic security features'
        ,'Managed MySQL database using PHP for accessing and sending information to database • Implemented a histogram and filtering feature with Google Visualization API and MySQL data, which can then be manipulated by the end user '
        ,'Technology used: Objective-C, PHP, MySQL'
      ],
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
