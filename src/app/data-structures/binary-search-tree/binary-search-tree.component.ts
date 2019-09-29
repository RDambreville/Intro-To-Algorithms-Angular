import { Component, OnInit } from '@angular/core';
import { InputService } from 'src/app/shared/services/input.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BinarySearchTree } from 'src/app/shared/models/binary-search-tree';

@Component({
  selector: 'app-binary-search-tree',
  templateUrl: './binary-search-tree.component.html',
  styleUrls: ['./binary-search-tree.component.css']
})
export class BinarySearchTreeComponent implements OnInit {

  inputArray: any[];
  form: FormGroup;
  bst: BinarySearchTree;
  constructor(private inputService: InputService, private fb: FormBuilder ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      array: [],
    });
  }

  createBST(): void {
    this.bst = new BinarySearchTree(this.inputService.parseInputArr(this.form.controls.array.value));
  }



}
