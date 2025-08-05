import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { HeaderComponent } from './components/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BottomNavComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';
}