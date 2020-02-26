import { DrawingService } from 'src/app/shared/services/drawing.service';
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

  constructor(public inputService: InputService, private drawingService: DrawingService) { }

  ngOnInit() {
  }

  createStack(): void {
    this.stack = new Stack(this.inputArray);
    console.log('new stack', this.stack);
    this.drawingService.drawStack('stack-canvas', this.stack);
  }

  setPushValue(value): void {
    this.pushValue = JSON.parse(value);
  }

  pop(): any {
    console.log('popped element', this.stack.pop());
    console.log('stack post-pop', this.stack);
    this.drawingService.drawStack('stack-canvas', this.stack);
  }

  push(): void {
    if (this.pushValue) {
      this.stack.push(this.pushValue);
      console.log('stack post-push', this.stack);
      this.drawingService.drawStack('stack-canvas', this.stack);
    }
  }

}


