import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  swap(a: any, b: any) {
    const temp = a;
    a = b;
    b = temp;
  }
}
