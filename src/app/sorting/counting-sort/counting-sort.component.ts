import { Component, OnInit } from '@angular/core';
import { SortingService } from './../../shared/services/sorting.service';

@Component({
  selector: 'app-counting-sort',
  templateUrl: './counting-sort.component.html',
  styleUrls: []
})
export class CountingSortComponent implements OnInit {
  A: any[]; // input array
  B: any[] = []; // sorted array

  constructor(private sortService: SortingService) { }

  ngOnInit() {
  }


  countingSort() {
    const C = new Array(this.A.length); // temporary storage
    const k = C.length;
    console.log('input array', this.A);
    for (let i = 0; i < k; i++) {
      C[i] = 0;
    }
    for (let j = 1; j < this.A.length - 1; j++) {
      C[this.A[j]] = C[this.A[j]] + 1;
    }

    // C[i] now contains the number of elements equal to i

    for (let i = 1; i < k; i++) {
      C[i] = C[i] + C[i - 1];
    }

    // C[i] now contains the number of elements les than or equal to i

    for (let j = this.A.length; j >= 1; j--) {
      this.B[C[this.A[j]]] = this.A[j];
      C[this.A[j]] = C[this.A[j]] - 1;
    }

    console.log('sorted array', this.B);
  }

}
