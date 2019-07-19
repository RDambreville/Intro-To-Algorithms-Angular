import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LinkedList } from 'src/app/shared/models/linked-list';
import { InputService } from 'src/app/shared/services/input.service';


@Component({
  selector: 'app-linked-list',
  templateUrl: './linked-list.component.html',
  styleUrls: ['./linked-list.component.css']
})
export class LinkedListComponent implements OnInit {

  form: FormGroup;
  linkedList: LinkedList;

  constructor(private fb: FormBuilder, private inputService: InputService) { }

  ngOnInit() {
    this.form = this.fb.group({
      array: [],
      searchVal: null,
      insertVal: null
    });
    // this.linkedList = new LinkedList();
    // console.log('new linked list: ', this.linkedList);
  }

  createLinkedList(): void {
    this.linkedList = new LinkedList(this.inputService.parseInputArr(this.form.controls.array.value));
    // this.linkedList = new LinkedList();
    console.log('new linked list: ', this.linkedList);
  }

}
