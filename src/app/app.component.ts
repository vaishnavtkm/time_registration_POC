import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginpageComponent, SidebarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'timeapp';

  constructor(private router: Router) {}
  isLoginpage(): boolean {
    return this.router.url === '/';
  }
}
