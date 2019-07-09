import { SortingService } from './../../shared/services/sorting.service';
import { Component, OnInit } from '@angular/core';
import { InputService } from 'src/app/shared/services/input.service';

@Component({
  selector: 'app-insertion-sort',
  templateUrl: './insertion-sort.component.html',
  styleUrls: []
})
export class InsertionSortComponent implements OnInit {

  A: any[] = []; // input array
  B: any[] = []; // sorted output array

  constructor(
    private inputService: InputService
  ) { }

  ngOnInit() {
  }

  insertionSort() {
    this.B = this.A;
    const arrLen = this.B.length;
    let key;
    for (let j = 1; j < arrLen; j++) {
      key = this.B[j];
      let i = j - 1;
      while (i >= 0 && this.B[i] > key) {
        this.B[i + 1] = this.B[i];
        i--;
      }
      this.B[i + 1] = key;
    }
    console.log('sorted array', this.A);
  }

}
