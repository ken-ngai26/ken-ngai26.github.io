import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Personal Portfolio',
      technologies: 'GitHub Pages, Angular, Angular Material',
      description: [
        'Designed to host on the GitHub Pages',
        'To showcase the project',
        'Free option to host a person portfolio without paying for the host',
      ],
      image: '',
    },
    {
      title: 'Cycling In Vancouver',
      technologies: 'HTML, CSS3, Javascript, Bootstrap',
      description: [
        'Information architecture, user interface and user experience were thoroughly assessed through the process of designing this responsive site.',
        'My role included defining the purpose of the website, competitive analysis, site-mapping, flow-charting, logo design, final visual design, and final prototype of responsive website.',
      ],
      image: '',
    },
    {
      title: 'Older Portfolio',
      technologies: 'HTML, CSS, JS',
      description: [
        'Learned multiple technologies to build the product.',
      ],
      image: '',
    },
    {
      title: 'TeamAge E-Commerce Store',
      technologies: 'HTML, CSS, JS, PHP',
      description: [
        'use a free theme template WordPress combine with WooCommerce plugin to create the ecommerce store',
        'Coded HTML within the WordPress dashboard to match wireframe',
        'Uploaded images for the media through WordPress dashboard',
        'Input all the product contents and categories correctly',
        'Fixed CSS stylesheet for the responsiveness',
      ],
      image: '',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
