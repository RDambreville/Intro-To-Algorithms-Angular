export class Stack {

    top: number;
    baseArray: any[] = [];
    stackArray: any[] = [];

    constructor() {}

    isStackEmpty(): boolean {
        if (this.top === 0) {
            return true;
        } else {
            return false;
        }
    }

    push(item): void {
        this.top++;
        this.stackArray[this.top] = item;
    }

    pop(): any {
        if (this.isStackEmpty()) {
            console.error('Underflow!');
            return null;
        } else {
            this.top--;
            const poppedItem = this.stackArray[this.top + 1];
            this.stackArray.splice(this.top + 1, 1);
            return poppedItem;
        }
    }

}
