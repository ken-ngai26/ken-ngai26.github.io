import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Expert',
      rating: 70,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'MySQL',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'Python',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'Java',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'C++',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'Web Design',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'Adobe Suite',
      level: 'Intermediate',
      rating: 75,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
