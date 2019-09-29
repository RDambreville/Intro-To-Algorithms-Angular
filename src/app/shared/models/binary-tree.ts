import { Node } from './node';

export class BinaryTree {

    root: Node;

    constructor(array: any[]) {
        // sort the input array in ascending order
       array.sort((a, b) => b - a > 0 ? 0 : 1);
       // set the root of the tree to be the middle element of the input array
       this.root = new Node(array[Math.floor((array.length - 1) / 2)]);
    }
}
