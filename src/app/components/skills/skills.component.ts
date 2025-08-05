import { Component } from '@angular/core';
import { NgFor } from '@angular/common'; // Import NgFor for the loop

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor], // Declare NgFor here
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular',
    'React', 'Vue.js', 'RxJS', 'NgRx', 'Node.js', 'Express.js',
    'Figma', 'Sketch', 'Git', 'REST APIs', 'SQL'
  ];
}