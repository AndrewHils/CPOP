import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private cartItems: { name: string; price: number }[] = [];

  addToCart(item: { name: string; price: number }) {
    this.cartItems.push(item);
  }

  getCartItems() {
    return this.cartItems;
  }

  calculateTotal() {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}
