/*import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router: Router) { }

  onSubmit() {
    // Perform registration logic here (e.g., API calls, validation)

    // Assuming registration is successful, navigate to login component
    this.router.navigate(['/login']);
  }
}*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formData = {
    username: '',
    email: '',
    crepass: '',
    conpass: ''
  };

  constructor(private router: Router) { }

  ngOnInit() {
    // Initialization tasks can go here if needed
  }

  onSubmit() {
    // Store the form data in local storage
    localStorage.setItem('registeredUser', JSON.stringify(this.formData));
    console.log('Form Data:', this.formData);
    this.router.navigate(['/login']);
  }
}
