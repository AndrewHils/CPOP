import { Component, Input, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() cartItems: { name: string; price: number }[] = [];

  constructor(public shoppingService: ShoppingService) {}
  
  ngOnInit(): void {
    
  }

}
