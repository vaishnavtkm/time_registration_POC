import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.scss',
})
export class UserprofileComponent {
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

  clearStorage(): void {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('refreshToken');
    this.email = null;
    this.name = null;
  }
}
