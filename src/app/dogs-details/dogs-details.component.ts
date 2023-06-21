import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { iarrays } from '../iarrays';
import { dogs } from '../arrays';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-dogs-details',
  templateUrl: './dogs-details.component.html',
  styleUrls: ['./dogs-details.component.scss']
})
export class DogsDetailsComponent implements OnInit {
  dog : iarrays = {} as iarrays;
  index: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService ) { 
  }
  
  addToCart(){
    this.cartService.addToCart(this.dog);
  }
  
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params["dogsID"];
      this.dog = dogs[this.index]
    })
  }
}
