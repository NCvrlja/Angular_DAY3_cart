import { Component, OnInit } from '@angular/core';
import { iarrays } from '../iarrays';
import { dogs } from '../arrays';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit{
  dogs: iarrays[] = dogs;

  ngOnInit(): void {
    
  }
}
