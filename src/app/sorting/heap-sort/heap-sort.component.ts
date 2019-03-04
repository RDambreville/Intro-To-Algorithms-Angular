import { Component, OnInit } from '@angular/core';
import { Heap } from './heap';

@Component({
  selector: 'app-heap-sort',
  templateUrl: './heap-sort.component.html',
  styleUrls: ['./heap-sort.component.css']
})
export class HeapSortComponent implements OnInit {

  heap: Heap;
  heapSize: number;
  inputArr: any;

  constructor() { }

  ngOnInit() {
  }





  heapSortEntry() {
    let heapSize = document.getElementById('hpSizeInput').innerText;
    heapSize = heapSize ? Number.parseInt(heapSize, 10) : this.inputArr.length;

    const startObj = {
      arr: this.inputArr,
      heapSize: heapSize,
      length: this.inputArr.length
    };

    this.heap = new Heap(startObj);
    this.heap.heapSort();
    const output = document.getElementById('hpSrtOutput');
    output.innerHTML = this.heap.heapObj.arr;
    console.log('heap', this.heap);
  }

  parseInputArray(inputStr) {
    if (inputStr.includes(', ')) {
      this.inputArr = inputStr.split(', ').map(item => item = Number.parseInt(item, 10));
    } else if (inputStr.includes(',')) {
      this.inputArr = inputStr.split(',').map(item => item = Number.parseInt(item, 10));
    } else if (inputStr.includes('')) {
      this.inputArr = inputStr.split('').map(item => item = Number.parseInt(item, 10));
    }

    // document.getElementById('hpArrSize').value = this.inputArr.length;
    this.heapSize = this.inputArr.length;
  }
}
