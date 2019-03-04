import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-sort',
  templateUrl: './quick-sort.component.html',
  styleUrls: ['./quick-sort.component.css']
})
export class QuickSortComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  quickSortEntry() {
    let inputArr = document.getElementById('qkSrt').value.split(',');
    inputArr = inputArr.map(num => {
      return (num = Number.parseInt(num, 10));
    });
    this.quickSort(inputArr, 0, inputArr.length - 1);

    console.log('sorted Array', inputArr);
    document.getElementById('qkSortOutput').innerHTML = inputArr;

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
