import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  name: string | null = '';
  email: string | null = '';
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.email = sessionStorage.getItem('email');
    this.name = sessionStorage.getItem('name');

    if (!this.email) {
      const email = this.authService.email;
      if (email) {
        const parts = email.split('@');
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('name', parts[0]);
      }
    }
  }
} 
