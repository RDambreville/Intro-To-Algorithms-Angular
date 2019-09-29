import { BSTNode } from './bst-node';

export class BinarySearchTree {

    root: BSTNode;

    constructor(array: any[]) {
    //     // sort the input array in ascending order
    //    array.sort((a, b) => b - a > 0 ? 0 : 1);
    //    // set the root of the tree to be the middle element of the input array
    //    this.root = new BSTNode(array[Math.floor((array.length - 1) / 2)]);

        array.forEach(x => this.insert(x));
        console.log('binary search tree', this.root);
    }

    // insert(numToInsert: number): void {
    //     if (!this.root) {
    //         this.root = new BSTNode(numToInsert);
    //         return;
    //     }
    //     let currentNode = this.root;
    //     while (currentNode) {
    //         if (currentNode.data) {
    //             if (numToInsert < currentNode.data) {
    //                 if (!currentNode.left) {
    //                    this.createEmptyChildNode(currentNode, 'left');
    //                 }
    //                 currentNode = currentNode.left;
    //             } else if (numToInsert > currentNode.data) {
    //                 if (!currentNode.right) {
    //                     this.createEmptyChildNode(currentNode, 'right');
    //                  }
    //                 currentNode = currentNode.right;
    //             }
    //         } else {
    //             currentNode.data = numToInsert;
    //         }
    //     }

    //     if (numToInsert < currentNode.data) {
    //         currentNode.left = new BSTNode(numToInsert);
    //     } else {
    //         currentNode.right = new BSTNode(numToInsert);
    //     }
    // }

    // createEmptyChildNode(parentNode: BSTNode, whichChild: string) {
    //     if (whichChild === 'left') {
    //         parentNode.left = new BSTNode(null);
    //         parentNode.left.parent = parentNode;
    //     } else {
    //         parentNode.right = new BSTNode(null);
    //         parentNode.right.parent = parentNode;
    //     }
    // }

    insert(numToInsert): void {
        const nodeToInsert = new BSTNode(numToInsert);
        if (!this.root) {
            this.root = nodeToInsert;
            return;
        }
        let y = new BSTNode(null);
        let x = this.root;
        while (x) {
            y = x;
            if (numToInsert < x.data) {
                x = x.left;
            } else {
                x = x.right;
            }
        }
        nodeToInsert.parent = y;
        if (!y) {
            this.root = nodeToInsert;
        } else if (nodeToInsert.data < y.data) {
            y.left = nodeToInsert;
        } else {
            y.right = nodeToInsert;
        }
    }
}
