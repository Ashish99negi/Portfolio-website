import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  techStack = [
    { name: 'Angular', icon: 'assets/svg/angular1.gif' },
    { name: 'TypeScript', icon: 'assets/svg/typescript.svg' },
    { name: 'JavaScript', icon: 'assets/svg/javascript.svg' },
    { name: 'HTML', icon: 'assets/svg/html.svg' },
    { name: 'CSS', icon: 'assets/svg/css.svg' },
    { name: 'Angular Material', icon: 'assets/svg/material.svg' },
    { name: 'Tailwind CSS', icon: 'assets/svg/tailwind.svg' },
    { name: 'Bootstrap', icon: 'assets/svg/bootstrap.svg' },
  ];

  otherSkills = ['RxJS', 'Git', 'REST APIs', 'Postman', 'JIRA', 'Jasmine', 'Karma', 'NgRx'];

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
      title: 'Form Builder',
      description: 'An interactive form builder built with Angular 17, Tailwind CSS, and Angular Material. Features a drag-and-drop canvas for visually designing custom forms and exports ready-to-use HTML code for any Angular application.',
      link: 'https://online-form-builder.vercel.app/',
      imageUrl: 'assets/images/form-builder.png',
      status: 'complete'
    },
    {
      title: 'Journey Planner',
      description: 'A responsive and interactive Journey Planner built with Angular 17. Allows users to create dynamic multi-stop routes, discover nearby hotels and restaurants, and view destination photo galleries for their trip.',
      link: '#',
      imageUrl: 'assets/images/coming-soon.png',
      status: 'incomplete'
    }
  ];

  experiences = [
    {
      role: 'Angular Developer',
      company: 'Bigship Technologies',
      period: 'August 2024 – Present',
      location: 'Dehradun, India',
      current: true,
      points: [
        'Architected high-performance Angular applications, achieving a 40% performance boost by implementing lazy loading and efficient change detection strategies.',
        'Created reusable dynamic components in Angular, reducing codebase size by 30% and enhancing maintainability, enabling faster feature development and scalability across projects.',
        'Implemented Angular route guards with JWT-based authentication, securing sensitive application routes and ensuring robust access control for improved user data protection.',
        'Integrated Google Maps API to enable real-time delivery tracking and hyperlocal order placement, increasing user engagement by 25% and streamlining logistics workflows.'
      ]
    },
    {
      role: 'Associate Software Developer',
      company: 'IOTA Informatics',
      period: 'August 2023 – May 2024',
      location: 'Bhopal, India',
      current: false,
      points: [
        'Engineered a Teachers Web Application using Angular 16 and Angular Material.',
        'Improved application performance through debugging, code improvement, and optimisation techniques.',
        'Developed a secure HTTP interceptor for API authentication and token management, improving system reliability and safeguarding sensitive user data.',
        'Ensured design consistency with the client\'s standards and requirements.'
      ]
    },
    {
      role: 'Associate Software Developer',
      company: 'ONCEHUB',
      period: 'January 2022 – March 2023',
      location: 'Dehradun, India',
      current: false,
      points: [
        'Developed and maintained a modular front-end architecture using Angular 8.',
        'Enhanced user experience by leveraging RxJS observables for asynchronous data handling, delivering dynamic and responsive interfaces across devices.',
        'Leveraged RxJS Subjects for efficient state management and real-time data updates, streamlining component communication.',
        'Executed extensive refactoring tasks and resolved numerous issues in Angular applications, reducing 60% of bugs.'
      ]
    }
  ];

  expandedExps = new Set<number>();

  toggleExp(index: number) {
    if (this.expandedExps.has(index)) {
      this.expandedExps.delete(index);
    } else {
      this.expandedExps.add(index);
    }
  }

  isExpanded(index: number): boolean {
    return this.expandedExps.has(index);
  }

  scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
