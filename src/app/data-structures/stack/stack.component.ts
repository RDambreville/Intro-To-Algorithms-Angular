import { Component, OnInit } from '@angular/core';
import { InputService } from 'src/app/shared/services/input.service';
import { Stack } from 'src/app/shared/models/stack';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})



export class StackComponent implements OnInit {


  stack: Stack;
  inputArray: any[] = [];
  pushValue: any;

  constructor(public inputService: InputService) { }

  ngOnInit() {
    this.stack = new Stack();
  }

  onInput(inputString): void {
    this.inputArray = this.inputService.parseInputArr(inputString);
  }

  createStack(): void {
    this.stack.baseArray = this.inputArray;
    this.stack.top = this.stack.baseArray.length - 1;
    console.log('new stack', this.stack);
  }

  setPushValue(value): void {
    this.pushValue = JSON.parse(value);
  }

  pop(): any {
    console.log('popped element', this.stack.pop());
    console.log('stack post-pop', this.stack);
  }

  push(): void {
    this.stack.push(this.pushValue);
    console.log('stack post-push', this.stack);
  }

}


