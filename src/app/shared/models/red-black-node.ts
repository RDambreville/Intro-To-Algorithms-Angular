import { BSTNode } from './bst-node';

export class RedBlackNode extends BSTNode {

    color: string;

    constructor(_data: any, _color: string) {
        super(_data);
        this.color = _color;
    }
}
