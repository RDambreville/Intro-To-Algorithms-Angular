import { Component, OnInit } from '@angular/core';
import { InputService } from 'src/app/shared/services/input.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BinarySearchTree } from 'src/app/shared/models/binary-search-tree';
import { DrawingService } from 'src/app/shared/services/drawing.service';

@Component({
  selector: 'app-binary-search-tree',
  templateUrl: './binary-search-tree.component.html',
  styleUrls: ['./binary-search-tree.component.css']
})
export class BinarySearchTreeComponent implements OnInit {

  inputArray: any[];
  form: FormGroup;
  bst: BinarySearchTree;
  constructor(
    private inputService: InputService,
    private drawingService: DrawingService,
    private fb: FormBuilder ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      array: [],
      insertVal: '',
      searchVal: '',
      searchResult: '',
      deleteValue: '',
      startNode1: '',
      startNode2: '',
      maxDisplayVal: '',
      minDisplayVal: '',
    });
  }

  createBST(): void {
    this.bst = new BinarySearchTree(this.inputService.parseInputArr(this.form.controls.array.value));
    this.bst.inOrderTreeWalk(this.bst.root); // console.log() the tree in order
    this.drawingService.drawBSTTree('bst-canvas', this.bst.root);
  }

  logBST(): void {
    console.log('bst after change');
    this.bst.inOrderTreeWalk(this.bst.root);
  }

  redraw(): void {
    this.drawingService.clearCanvas();
    this.drawingService.drawBSTTree('bst-canvas', this.bst.root);
  }

}
