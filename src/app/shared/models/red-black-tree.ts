import { RedBlackNode } from './red-black-node';

export class RedBlackTree {

    root: RedBlackNode;

    constructor(array: any[]) {
        array.forEach(x => this.insert(x));
        console.log('binary search tree', this.root);
        this.root.color = 'black';
    }

    leftRotate(y: RedBlackNode): void {
        const x = y.left;
        y.left  = x.right;
        if (x.right) {
            x.right.parent = y;
        }
        x.parent = y.parent;
        if (!y.parent) {
            this.root = x;
        } else if (y === y.parent.left) {
            y.parent.left = x;
        } else {
            y.parent.right = x;
        }
        x.right = y;
        y.parent = x;
    }

    rightRotate(y: RedBlackNode): void {
        const x = y.left;
        y.left  = x.right;
        if (x.right) {
            x.right.parent = y;
        }
        x.parent = y.parent;
        if (!y.parent) {
            this.root = x;
        } else if (y === y.parent.right) {
            y.parent.right = x;
        } else {
            y.parent.right = x;
        }
        x.right = y;
        y.parent = x;
    }

    insert(nodeToInsert: RedBlackNode): void {
        let y = null;
        let x = this.root;
        while (x) {
            y  = x;
            if (nodeToInsert.data < x.data) {
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
        nodeToInsert.left = null;
        nodeToInsert.right = null;
        nodeToInsert.color = 'red';
        this.insertFixup(nodeToInsert); // recolor all the nodes so that the tree satisfies the red-black properties
    }

    insertFixup(nodeToInsert: RedBlackNode): void {
        while (nodeToInsert.parent.color === 'red') {
            if (nodeToInsert.parent === nodeToInsert.parent.parent.left) {
                this.then(nodeToInsert, 'right');
            } else {
                this.then(nodeToInsert, 'left');
            }
        }
    }

    then(nodeToInsert: RedBlackNode, whichChild: string) {
        const y = nodeToInsert.parent.parent[whichChild];
                if (y.color === 'red') {
                    nodeToInsert.parent.color = 'black';
                    y.color = 'black';
                    nodeToInsert.parent.parent.color = 'red';
                    nodeToInsert = nodeToInsert.parent.parent;
                } else if (nodeToInsert === nodeToInsert.parent[whichChild]) {
                    nodeToInsert = nodeToInsert.parent;
                    this.leftRotate(nodeToInsert);
                }
                nodeToInsert.parent.color = 'black';
                nodeToInsert.parent.parent.color = 'red';
                this.rightRotate(nodeToInsert.parent.parent);
    }

    // rightRotate(y: RedBlackNode): void {
    //     const x = y.left;
    //     y.left = x.right;
    //     x.right = y;
    //     y.parent = x;
    //     if (!y.parent) {
    //         this.root = x;
    //     } else if (y === y.parent.left) {
    //         y.parent.left = x;
    //     } else {
    //         y.parent.right = x;
    //     }
    // }
}
