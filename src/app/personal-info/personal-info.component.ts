import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  myData:string[][] = [
    ['Name', 'Ken Ngai'],
    ['Education', 'B.S — Major in Computing Science']

  ];

  aboutMe: string[] = [
    'I am a Computer Science degree graduate at SFU and senior management certificate in  New Media Design & Web Development at BCIT.',
    'I am passionate about technology with a  desire to learn new skills and languages. I am a fast learner, a good team player and have  strong analytical skills. I am determined to be a Full-Stack developer since I have proficient  knowledge of both front-end and back-end development. '
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
