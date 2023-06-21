import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { iarrays } from '../iarrays';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: iarrays[] = [];
  total: number = 0;
  constructor(private cartService: CartService) {}

  deletebtn (){
    this.cart = this.cartService.clearItems();
    this.total = this.cartService.calculateTotal()
  }

  deleteElment(){
    this.cart = this.cartService.deleteElment()
    this.total = this.cartService.calculateTotal()
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.calculateTotal();
  }
}
