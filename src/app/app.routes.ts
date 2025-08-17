import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
 { path: 'about', component: ProfileComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: '' }
];