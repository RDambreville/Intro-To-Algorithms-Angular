export class Node {
    data: any;
    next: Node;
    prev: Node;

    constructor(_data: any) {
        this.data = _data;
        this.next = null;
        this.prev = null;
    }
}
