import { BinarySearchTree } from './binary-search-tree';
import { RedBlackNode } from './red-black-node';

export class RedBlackTree extends BinarySearchTree {

    root: RedBlackNode;

    constructor(array: any[]) {
        super(array);
    }
}
