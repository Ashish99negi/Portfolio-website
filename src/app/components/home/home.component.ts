import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Tailwind CSS', 'Bootstrap', 'RxJS', 'Git', 'REST APIs', 'Postman', 'JIRA', 'Jasmine', 'Karma'
  ];

}
