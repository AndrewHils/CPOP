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
}
