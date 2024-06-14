import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) { }

  onSubmit() {
    // Retrieve registered user data from local storage
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser') || '{}');

    if (this.email === registeredUser.email && this.password === registeredUser.crepass) {
      // Successful login, navigate to models page
      this.router.navigate(['/models']);
    } else {
      // Show error message
      this.errorMessage = 'Invalid login credentials. Please register first.';
    }
  }
}
