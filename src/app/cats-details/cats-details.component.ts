import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { cats } from "../arrays";
import { iarrays } from "../iarrays";
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cats-details',
  templateUrl: './cats-details.component.html',
  styleUrls: ['./cats-details.component.scss']
})
export class CatsDetailsComponent implements OnInit {
  cat: iarrays = {} as iarrays;
  index: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService ) { 
  }

  addToCart(){
    this.cartService.addToCart(this.cat);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params["catsID"];
      this.cat = cats[this.index]
    })
  }
}
