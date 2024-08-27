import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.scss',
})
export class LoginpageComponent {
  checkLogin() {
    if (sessionStorage.getItem('refreshToken')) {
      this.router.navigate(['home']);
    } else {
      alert('User is not Logged In ! Please Log In');
    }
  }
  email: string = '';
  password: string = '';
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  onSubmit() {
    this.authService.email = this.email;
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        const token = response.accessToken;
        const refreshToken = response.refreshToken;
        this.authService.storeToken(token);
        this.authService.storeRefreshToken(refreshToken);
        console.log('Login successful', refreshToken);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        alert('Enter Valid Credentials !!');
      },
      complete: () => {
        alert('Login Successful');
      },
    });
  }
}
