import { Component } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Quiz Maniac',
      description: 'An AI-powered web platform built with Angular 17 and Gemini AI that generates dynamic quizzes on any topic. It features customizable modes like Timed and Survival to provide a personalized, engaging, and secure learning experience.',
      link: 'https://quiz-maniac99.netlify.app/',
      imageUrl: 'assets/images/quiz-app.png'
    },
    {
      title: 'Form Builder',
      description: 'An interactive form builder built with Angular 17, Tailwind CSS, and Angular Material. This platform features a modern drag-and-drop canvas for visually designing custom forms. It includes a powerful export tool that generates ready-to-use, HTML code for seamless integration into any Angular application..',
      link: 'https://online-form-builder.vercel.app/',
      imageUrl: 'assets/images/form-builder.png'
    },
    {
      title: 'Journey Planner App',
      description: 'A responsive and interactive Journey Planner built with Angular 17. This application allows users to create dynamic, multi-stop routes, discover nearby hotels and restaurants, view destination photo galleries for their trip.',
      link: '#',
      imageUrl: 'assets/images/project-three.png'
    }
  ];
}