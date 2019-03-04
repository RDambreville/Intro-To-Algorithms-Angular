export class Heap {
    heapObj: any;
    arr: any[];
    length: number;
    heapSize: number;

    constructor(inputObj) {
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

    buildMaxHeap(obj) {
        obj.heapSize = obj.length;
        for (let i = Math.floor((obj.length) / 2); i >= 0; i--) {
            this.maxHeapify(obj, i);
        }
    }

    maxHeapify(obj, i) {
        const leftIndex = this.left(i);
        const rightIndex = this.right(i);
        let largest;
        if (leftIndex <= obj.heapSize - 1 && obj.arr[leftIndex] > obj.arr[i]) {
            largest = leftIndex;
        } else {
            largest = i;
        }
        if (rightIndex <= obj.heapSize - 1 && obj.arr[rightIndex] > obj.arr[largest]) {
            largest = rightIndex;
        }
        if (largest !== i) {
            const temp = obj.arr[i];
            obj.arr[i] = obj.arr[largest];
            obj.arr[largest] = temp;
            this.maxHeapify(obj, largest);
        }
    }

    heapSort() {
        this.buildMaxHeap(this.heapObj);
        for (let i = this.heapObj.length - 1; i >= 0; i--) {
            const temp = this.heapObj.arr[0];
            this.heapObj.arr[0] = this.heapObj.arr[i];
            this.heapObj.arr[i] = temp;
            // this.heapObj.heapSize = this.heapObj.heapSize - 1;
            this.heapObj.heapSize--;
            this.maxHeapify(this.heapObj, 0);
        }
    }
// For Max Priortiy Queues
    heapMax() {
        return this.heapObj.arr[0];
    }

    heapExtractMax() {
        if (this.heapObj.heapSize < 1) {
            console.error('HEAP UNDEFLOW');
        }
        const max = this.heapObj.arr[0];

    }
}

