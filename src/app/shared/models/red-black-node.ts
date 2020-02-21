import { BSTNode } from './bst-node';

export class RedBlackNode {

    color: string;
    data: any;
    parent: RedBlackNode;
    left: RedBlackNode;
    right: RedBlackNode;

    constructor(_data: any, _color: string) {
        this.color = _color;
        this.data = _data;
        this.parent = null;
        this.right = null;
        this.left = null;
    }
}
