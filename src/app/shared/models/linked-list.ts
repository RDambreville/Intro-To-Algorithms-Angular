import { Node } from '../models/node';
export class LinkedList {

    array: any;
    head: Node;
    tail: Node;

    constructor(inputArray: any[]) {
        inputArray.forEach(itemVal => {
            this.insert(itemVal, true);
        });
    }

    search(itemVal: string): Node {
        const item = Number.parseInt(itemVal, 10);
        let node = this.head;
        while (node && node.data !== item) {
            node = node.next;
        }
        return node;
    }

    insert(itemVal: any, isInitial?: boolean): void {

        let item;
        if (typeof(itemVal) === 'string') {
        item = new Node(Number.parseInt(itemVal, 10));
        } else {
            item = new Node(itemVal);
        }
        item.next = this.head;
        if (this.head) {
            this.head.prev = item;
        }
        this.head = item;
        item.prev = null;
        if (!isInitial) {
            console.log('list after insert', this);
        }
    }

    delete(item: Node): void {
        if (item) {
            if (item.prev) {
                item.prev.next = item.next;
            } else {
                this.head = item.next;
            }
            if (item.next) {
                item.next.prev = item.prev;
            }
            console.log('list after delete', this);
        } else {
            console.error('Item not found');
        }
    }

    searchAndDelete(item: string): void {
        this.delete(this.search(item));
    }
}

