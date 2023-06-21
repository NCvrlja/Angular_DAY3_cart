import { Component, OnInit } from '@angular/core';
import { turtles } from '../arrays';
import { iarrays } from '../iarrays';

@Component({
  selector: 'app-turtles',
  templateUrl: './turtles.component.html',
  styleUrls: ['./turtles.component.scss']
})
export class TurtlesComponent implements OnInit {
  turtles: iarrays[] = turtles;

  ngOnInit(): void {
    
  }
}
