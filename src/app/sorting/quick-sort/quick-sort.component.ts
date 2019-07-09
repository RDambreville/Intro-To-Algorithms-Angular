import { Component, OnInit } from '@angular/core';
import { SortingService } from 'src/app/shared/services/sorting.service';

@Component({
  selector: 'app-quick-sort',
  templateUrl: './quick-sort.component.html',
  styleUrls: []
})
export class QuickSortComponent implements OnInit {

  inputArr: any[];

  sortedOutput: any[];

  constructor(private sortService: SortingService) { }

  ngOnInit() {
  }



  quickSortEntry() {
    // let inputArr = document.getElementById('qkSrt').value.split(',');
    // this.inputArr = this.inputArr.map(num => {
    //   return (num = Number.parseInt(num, 10));
    // });
    this.quickSort(this.inputArr, 0, this.inputArr.length - 1);

    console.log('sorted Array', this.inputArr);
    this.sortedOutput = this.inputArr;

  }

  quickSort(A, start, end) {
    if (start < end) {
      const mid = this.partition(A, start, end);
      this.quickSort(A, start, mid - 1);
      this.quickSort(A, mid + 1, end);
    }
    return A;
  }

  partition(A, start, end) {
    const pivot = A[end];
    let i = start - 1;
    for (let j = start; j <= end - 1; j++) {
      if (A[j] <= pivot) {
        i++;
        const temp1 = A[i];
        A[i] = A[j];
        A[j] = temp1;
      }
    }
    const temp2 = A[i + 1];
    A[i + 1] = A[end];
    A[end] = temp2;
    return i + 1;
  }

}
