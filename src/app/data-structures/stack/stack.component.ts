import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})

export interface Stack {
  top: number;
  baseArray: any[] = [];
}


export class StackComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  isStackEmpty() {
    if 
  }
}
