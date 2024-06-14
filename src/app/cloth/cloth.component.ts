import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.css']
})
export class ClothComponent implements OnInit {
  buttonWidth = 240;
  showproduct: any = [];
  public totalamount: number = 0;
  public taxamount: number = 0;
  public finalamount: number = 0;
  public addressform = false;
  public sentamount: number = 0;
  myform: FormGroup | any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    // Fetch products
    this.http.get('http://localhost:3000/api/products').subscribe(res => {
      this.showproduct = res;
      this.totalamount = this.calculatePrice();
      this.taxamount = this.totalamount / 100 * 15;
      this.finalamount = this.taxamount + this.totalamount;
      this.sentamount = this.finalamount;
    });

    // Initialize form with validators
    this.myform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ]),
      mobile: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      address: new FormControl('', Validators.required),
    });
  }

  get formControls() {
    return this.myform.controls;
  }

  calculatePrice(): number {
    // Implement your price calculation logic here
    return 100; // example price
  }

  deleteitem(item: any) {
    // Implement your delete item logic
  }

  Empty() {
    // Implement your empty cart logic
  }

  cancel() {
    this.addressform = false;
    this.myform.reset();
    localStorage.removeItem('ecomdata');
  }

  onsubmit() {
    if (this.myform.valid) {
      const formData = this.myform.value;
      console.log('Form data:', formData); // Log form data

      this.http.post('http://localhost:3000/api/orders', formData).subscribe(response => {
        console.log('Order submitted successfully', response);
        // Reset the form or show a success message
        this.myform.reset();
      }, error => {
        console.error('Error submitting order', error);
      });

      localStorage.setItem('ecomdata', JSON.stringify(this.myform.value.name));
    } else {
      console.log("Form is invalid");
    }
  }

  onLoadPaymentData(event: any) {
    console.log(event, '>>Data');
    alert('Order successfully placed!');
    this.router.navigate(['/model']);
  }
}
