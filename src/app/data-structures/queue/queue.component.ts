import { Component, OnInit, OnDestroy } from '@angular/core';
import { Queue } from 'src/app/shared/models/queue';
import { InputService } from 'src/app/shared/services/input.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CanvasSize } from './../../shared/constants/canvas-size';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit, OnDestroy {

  private unsubscriber$ = new Subject<void>();

  queue: Queue;
  inputArray: any[];
  inputArray2: any[];
  valueToEnqueue: any;
  canvasSize = CanvasSize;

  // controlNames: string[] = [
  //   ''
  // ];

  form: FormGroup;

  constructor(private inputService: InputService, private fb: FormBuilder ) { }

  ngOnInit() {
    this.form = this.fb.group({
      array: [],
      head: '',
      tail: '',
      enqVal: ''
    });
    this.listenToControls();
  }

  listenToControls(): void {
    // Object.keys(this.form.controls).forEach(ctrlName => {
    //   this.form.get(ctrlName).valueChanges.pipe(takeUntil(this.unsubscriber$)).subscribe(change => {

    //   });
    // });
    this.form.get('array').valueChanges.pipe(takeUntil(this.unsubscriber$)).subscribe(change => {
     // change = this.parseInputArray(change);
    });
    this.form.get('head').valueChanges.pipe(takeUntil(this.unsubscriber$)).subscribe(change => {
      // change = Number.parseInt(change, 10);
      // console.log('head changed', change);
    });
    this.form.get('tail').valueChanges.pipe(takeUntil(this.unsubscriber$)).subscribe(change => {
      // change = Number.parseInt(change, 10);
      // console.log('tail changed', change);
    });
    this.form.get('enqVal').valueChanges.pipe(takeUntil(this.unsubscriber$)).subscribe(change => {
      // change = Number.parseInt(change, 10);
      // console.log('enqueue value changed', change);
    });
  }

  createQueue(): void {
    this.queue = new Queue(
      Number.parseInt(this.form.controls.head.value, 10),
      Number.parseInt(this.form.controls.tail.value, 10),
      this.inputService.parseInputArr(this.form.controls.array.value),
      this.inputService.parseInputArr(this.form.controls.array.value),
    );
    // this.queue.baseArray = this.inputArray;
    // this.queue.queueArray = this.inputArray2;
    // this.queue.head = this.queue.stackArray.length - 1;
    console.log('new queue', this.queue);
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

}
