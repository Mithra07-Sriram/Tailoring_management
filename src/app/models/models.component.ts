import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Model {
  id: number;
  name: string;
  imageUrl: string;
}

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent {
  models: Model[] = [
    { id: 1, name: 'Model 1', imageUrl: 'https://i5.walmartimages.com/asr/1041f330-970f-4210-a1a8-f9061e6ab89b_1.dd51e5689fa4d69724e15383322ccff7.jpeg' },
    { id: 2, name: 'Model 2', imageUrl: 'image1.jpg' },
    { id: 3, name: 'Model 3', imageUrl: 'image2.jpeg' },
    { id: 4, name: 'Model 4', imageUrl: 'image3.jpeg' },
    { id: 5, name: 'Model 5', imageUrl: 'image4.jpeg' },
    { id: 6, name: 'Model 6', imageUrl: 'image5.jpeg' }
  ];

  cartItems: Model[] = [];

  constructor(private router: Router) {}

  addToCart(model: Model) {
    this.cartItems.push(model);
  }

  orderNow(model: Model) {
    this.router.navigate(['/order'], { queryParams: { modelId: model.id } });
  }
}
