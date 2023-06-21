import { Component, DoCheck } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements DoCheck {
  length : number = 0;

  constructor(private cs : CartService){}
// docheck is for the number of elements in the cart
  ngDoCheck(): void {
    this.length = this.cs.getLength();
  }
}
