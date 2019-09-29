export class BSTNode {
    data: any;
    parent: BSTNode;
    right: BSTNode;
    left: BSTNode;

    constructor(_data: any) {
        this.data = _data;
        this.parent = null;
        this.right = null;
        this.left = null;
    }
}
