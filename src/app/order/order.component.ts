import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from './order.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  formData = {
    username: '',
    address: '',
    phone: '',
    email: '',
    tailor: '',
    clothType: '',
    shirtSize: '',
    shoulderSize: '',
    handSize: '',
    bodySize: '',
    fullOrHalfHand: '',
    pantLength: '',
    hipSize: '',
    idea: ''
  };

  constructor(private http: HttpClient, private orderService: OrderService, private router: Router) {}

  ngOnInit() {
    // Initialization tasks can go here if needed
  }

  onSubmit() {
    this.orderService.orders(this.formData).subscribe(
      response => {
        alert('You have successfully placed your order');
        this.router.navigate(['/cloth']); // Navigate to cloth page after success
      },
      error => {
        console.error('Error submitting order:', error);
        // Handle error cases
      }
    );
  }
}

export default OrderComponent;
