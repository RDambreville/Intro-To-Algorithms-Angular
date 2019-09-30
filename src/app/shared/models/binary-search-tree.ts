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


    /**
     * Print nodes in order.
     * @param node -- node at which to start the walk
     * @returns void
     */
    inOrderTreeWalk(node: BSTNode): void {
        if (node) {
            this.inOrderTreeWalk(node.left);
            // this.drawNode();
            console.log(node.data);
            this.inOrderTreeWalk(node.right);
        }
    }

    search(node: BSTNode, keyToFind: number): BSTNode {
        if (!node || keyToFind === node.data) {
            return node;
        }
        if (keyToFind < node.data) {
            return this.search(node.left, keyToFind);
        } else {
            return this.search(node.right, keyToFind);
        }
    }

    iterativeSearch(node: BSTNode, keyToFind): BSTNode {
        while (node && keyToFind !== node.data) {
            if (keyToFind < node.data) {
                node = node.left;
            } else {
                node = node.right;
            }
        }
        return node;
    }

    getMinimum(node: BSTNode): BSTNode {
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    getMaximum(node: BSTNode): BSTNode {
        while (node.right) {
            node = node.right;
        }
        return node;
    }

    getSuccessor(node: BSTNode): BSTNode {
        if (node.right) {
            return this.getMinimum(node.right);
        }
        let tempNode = node.parent;
        while (tempNode && node === tempNode.right) {
            node = tempNode;
            tempNode = tempNode.parent;
        }
        return tempNode;
    }

    transplant(replacee: BSTNode, replacer: BSTNode): void {
        if (!replacee.parent) {
            this.root = replacer;
        } else if (replacee === replacee.parent.left) {
            replacee.parent.left = replacer;
        } else {
            replacee.parent.right = replacer;
        }
        if (replacer) {
            replacer.parent = replacee.parent;
        }
    }

    delete(nodeToDelete: BSTNode): void {
        if (!nodeToDelete) {
            this.transplant(nodeToDelete, nodeToDelete.right);
        } else if (!nodeToDelete.right) {
            this.transplant(nodeToDelete, nodeToDelete.left);
        } else {
            const buriedChild = this.getMinimum(nodeToDelete.right);
            if (buriedChild.parent !== nodeToDelete) {
                this.transplant(buriedChild, buriedChild.right);
                buriedChild.right = nodeToDelete.right;
                buriedChild.right.parent = buriedChild;
            }
            this.transplant(nodeToDelete, buriedChild);
            buriedChild.left = nodeToDelete.left;
            buriedChild.left.parent = buriedChild;
        }
    }
}
