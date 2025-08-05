import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.scss'
})
export class BottomNavComponent {
  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
  
  isDarkTheme(): boolean {
    return this.themeService.isDark();
  }
}