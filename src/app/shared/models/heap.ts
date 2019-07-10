import { SortingService } from '../services/sorting.service';

export class Heap {
    heapObj: any;
    arr: any[];
    length: number;
    heapSize: number;

    constructor(inputObj, public sortService: SortingService) {
        this.heapObj = inputObj;
        this.arr = inputObj.arr;
        this.length = inputObj.length;
        this.heapSize = inputObj.heapSize;
    }

    parent(i) {
        return Math.floor(i / 2);
    }

    left(i) {
        return 2 * i;
    }

    right(i) {
        return (2 * i) + 1;
    }

    buildMaxHeap() {
        this.heapSize = this.length;
        for (let i = Math.floor((this.length) / 2); i >= 0; i--) {
            this.maxHeapify(i);
        }
    }

    maxHeapify(i) {
        const leftIndex = this.left(i);
        const rightIndex = this.right(i);
        let largest;
        if (leftIndex <= this.heapSize - 1 && this.arr[leftIndex] > this.arr[i]) {
            largest = leftIndex;
        } else {
            largest = i;
        }
        if (rightIndex <= this.heapSize - 1 && this.arr[rightIndex] > this.arr[largest]) {
            largest = rightIndex;
        }
        if (largest !== i) {
            const temp = this.arr[i];
            this.arr[i] = this.arr[largest];
            this.arr[largest] = temp;
            this.maxHeapify(largest);
        }
    }

    heapSort() {
        this.buildMaxHeap();
        for (let i = this.length - 1; i >= 0; i--) {
            const temp = this.arr[0];
            this.arr[0] = this.arr[i];
            this.arr[i] = temp;
            // this.heapSize = this.heapSize - 1;
            this.heapSize--;
            this.maxHeapify(0);
        }
        this.heapSize = this.heapObj.heapSize; // reset heap size
    }

    // For Max Priortiy Queues
    heapMax(): any {
        return this.arr[0];
    }

    heapExtractMax() {
        if (this.heapSize < 1) {
            return console.error('HEAP UNDEFLOW');
        }
        const max = this.arr[0];
        this.arr[0] = this.arr[this.heapSize - 1];
        this.heapSize--;
        this.maxHeapify(0);
        return max;
    }

    heapIncreaseKey(i: number, key: any) {
        if (key < this.arr[i]) {
            return console.error('new key is smaller than current key');
        }
        this.arr[i] = key;
        while (i > 0 && this.arr[this.parent(i)] < this.arr[i]) {
            this.sortService.swap(this.arr[i], this.arr[this.parent(i)]);
            i = this.parent(i);
        }
    }

    maxHeapInsert(key) {
        this.heapSize++;
        this.arr[this.heapSize] = -(Number.MAX_VALUE);
        this.heapIncreaseKey(this.heapSize, key);
    }
}

