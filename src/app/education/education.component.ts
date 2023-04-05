import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: " Simon Fraser University,",
      course: 'Bachelor of Science — Major in Computing Science',
      duration: '2015 – 2022'
    },
    {
      institute: 'British Columbia Institute of Technology',
      course: 'Certificate in New Media Design & Web Development',
      duration: '2017 – 2018 '
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
