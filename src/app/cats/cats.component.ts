import { Component, OnInit } from '@angular/core';
import { cats } from "../arrays";
import { iarrays } from "../iarrays";

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {
  cats: iarrays[] = cats;

  ngOnInit(): void {
    
  }
}
