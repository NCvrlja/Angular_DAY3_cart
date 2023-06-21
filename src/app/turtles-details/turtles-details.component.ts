import { Component, OnInit} from '@angular/core';
import { iarrays } from '../iarrays';
import { turtles } from "../arrays";
import { ActivatedRoute, Params } from "@angular/router";
import { CartService } from '../cart.service';

@Component({
  selector: 'app-turtles-details',
  templateUrl: './turtles-details.component.html',
  styleUrls: ['./turtles-details.component.scss']
})
export class TurtlesDetailsComponent implements OnInit{
  turtle: iarrays = {} as iarrays;
  index: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService){}
  addToCart(){
    this.cartService.addToCart(this.turtle);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
    this.index = +params["turtlesID"];
    this.turtle = turtles[this.index]
  })
  }
}
