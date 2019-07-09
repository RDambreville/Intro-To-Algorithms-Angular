export class Stack {

    top: number;
    baseArray: any[] = [];

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
        this.baseArray[this.top] = item;
    }

    pop(): any {
        if (this.isStackEmpty()) {
            console.error('Underflow!');
            return null;
        } else {
            this.top--;
            const poppedItem = this.baseArray[this.top + 1];
            this.baseArray.splice(this.top + 1, 1);
            return poppedItem;
        }
    }

}
