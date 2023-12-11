import { Component } from '@angular/core';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productName: string = "";
  productPrice: number = 0;
  cartItems: { name: string; price: number }[] = [];

  constructor(private shoppingService: ShoppingService) {}

  addToCart() {
    if (this.productName && this.productPrice) {
      this.shoppingService.addToCart({
        name: this.productName,
        price: this.productPrice
      });

      this.cartItems = this.shoppingService.getCartItems();
      this.productName = '';
      this.productPrice = 0;
    }
  }
  
}
