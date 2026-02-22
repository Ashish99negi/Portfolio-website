import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScrolled = false;
  activeSection = 'home';
  mobileOpen = false;

  constructor(private themeService: ThemeService) {}

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 60;
    this.trackActiveSection();
  }

  trackActiveSection() {
    const sections = ['home', 'skills', 'projects', 'experience'];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= 80 && bottom >= 80) {
          this.activeSection = id;
          break;
        }
      }
    }
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.mobileOpen = false;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  get isDark() {
    return this.themeService.isDark();
  }

  toggleMenu() {
    this.mobileOpen = !this.mobileOpen;
  }
}
