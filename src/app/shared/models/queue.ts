export class Queue {
    head: number;
    tail: number;
    baseArray: any[];
    queueArray: any[];

    constructor(_head: number, _tail: number, _baseArr: any[], _queueArr: any[]) {
        this.head = _head;
        this.tail = _tail;
        this.baseArray = _baseArr;
        this.queueArray = _queueArr;
    }

    enqueue(newItem): void {
        if (typeof(newItem) === 'string' && !isNaN(Number.parseInt(newItem, 10))) {
            newItem = Number.parseInt(newItem, 10);
        }
        this.queueArray[this.tail] = newItem;
        if (this.tail === this.queueArray.length) {
            this.tail =  1;
        } else {
            this.tail++;
        }
        console.log('queue after enqueue', this);
    }

    dequeue(): any {
        const removedItem = this.queueArray[this.head];
        if (this.head === this.queueArray.length) {
            this.head = 1;
        } else {
            this.head++;
        }
        this.queueArray[this.head - 1] = String(removedItem);
        console.log('queue after dequeue: ', this);
        console.log('removedItem: ', removedItem);
        return removedItem;
    }
}
