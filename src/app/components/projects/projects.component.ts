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
      imageUrl: 'assets/images/quiz-app.png',
      status: 'complete'
    },
    {
      title: 'Online Resume Builder',
      description: 'An online resume builder developed with Angular, allowing users to easily create, edit, and preview their resumes before downloading a PDF.',
      link: 'https://resume-builder-one-lemon.vercel.app/',
      imageUrl: 'assets/images/online-resume-builder.png',
      status: 'complete'
    },
    {
      title: 'Notes PRO',
      description: 'A modern, responsive note-taking application built with Angular 20, styled using Tailwind CSS and Angular Material components. It offers a clean and intuitive interface for creating, organizing, and managing your notes efficiently. Designed with a component-driven architecture for scalability and a seamless user experience across all devices.',
      link: 'https://online-form-builder.vercel.app/',
      imageUrl: 'assets/images/notes-pro.png',
      status: 'complete'
    },
    
    // {
    //   title: 'Journey Planner App',
    //   description: 'A responsive and interactive Journey Planner built with Angular 17. This application allows users to create dynamic, multi-stop routes, discover nearby hotels and restaurants, view destination photo galleries for their trip.',
    //   link: '#',
    //   imageUrl: 'assets/images/coming-soon.png',
    //   status: 'incomplete'
    // }
  ];
}