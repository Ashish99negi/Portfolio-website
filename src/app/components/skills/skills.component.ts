import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Tailwind CSS', 'Bootstrap', 'RxJS', 'Git', 'REST APIs', 'Postman', 'JIRA', 'Jasmine', 'Karma'
  ];
}