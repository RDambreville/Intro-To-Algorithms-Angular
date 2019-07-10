import { TemplateService } from './../../shared/services/template.service';
import { SortingService } from './../../shared/services/sorting.service';
import { Component, OnInit } from '@angular/core';
// import { SortingComponent } from '../sorting.component';
import { Heap } from '../../shared/models/heap';

@Component({
  selector: 'app-heap-sort',
  templateUrl: './heap-sort.component.html',
  styleUrls: []
})
export class HeapSortComponent /*extends SortingComponent*/ implements OnInit {

  heap: Heap;
  heapSize: number;
  inputArr: any;

  sortedOutput: any[];

  index: number;
  key: number;

  max: any;

  constructor(
    public sortService: SortingService,
    private templateService: TemplateService) {
    // super();
   }

  ngOnInit() {
  }

  changeIndex(index: string) {
    this.index = Number.parseInt(index, 10);
  }

  changeKey(key: any) {
    this.key = Number.parseInt(key, 10);
  }

  createHeap() {
    const sortBtn = document.getElementById('sortBtn');
    let heapSize = document.getElementById('hpSizeInput').innerText;
    heapSize = heapSize ? Number.parseInt(heapSize, 10) : this.inputArr.length;

    const startObj = {
      arr: this.inputArr,
      heapSize: heapSize,
      length: this.inputArr.length
    };

    this.heap = new Heap(startObj, this.sortService);
    // this.heap.heapSort();
    console.log('heap', this.heap);
    this.templateService.togglelBtn(sortBtn, 'enable');
  }

  extractMax() {
    this.max = this.heap.heapExtractMax();
    this.sortedOutput = this.heap.arr;
  }

  getMax() {
    this.max = this.heap.heapMax();
  }

  increaseKey() {
    this.heap.heapIncreaseKey(this.index, this.key);
    this.sortedOutput = this.heap.arr;
  }

  sortHeap() {
    this.heap.heapSort();
    this.sortedOutput = this.heap.arr;
  }

  parseInputArray(inputStr) {
    const createHeapBtn = document.getElementById('createHeapBtn');
    const sortBtn = document.getElementById('sortBtn');
    if (inputStr.length > 0) {
      if (inputStr.includes(', ')) {
        this.inputArr = inputStr.split(', ').map(item => item = Number.parseInt(item, 10));
      } else if (inputStr.includes(',')) {
        this.inputArr = inputStr.split(',').map(item => item = Number.parseInt(item, 10));
      } else if (inputStr.includes('')) {
        this.inputArr = inputStr.split('').map(item => item = Number.parseInt(item, 10));
      }
      this.templateService.togglelBtn(createHeapBtn, 'enable');
    } else {
      if (!createHeapBtn.attributes.getNamedItem('disabled')) {
        this.templateService.togglelBtn(createHeapBtn, 'disable');
      }

      if (!sortBtn.attributes.getNamedItem('disabled')) {
        this.templateService.togglelBtn(sortBtn, 'disable');
      }

    }

    // document.getElementById('hpArrSize').value = this.inputArr.length;
    this.heapSize = this.inputArr.length;
  }
}
