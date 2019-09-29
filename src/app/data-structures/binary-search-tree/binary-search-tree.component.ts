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
    this.drawTree();
  }

  drawTree(): void {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    context.strokeStyle = 'green';        // set the color for the circle to 'green'
    context.lineWidth = 5.0;
    let currentNode = this.bst.root;
    let x = 100;
    let y = 100;
    while (currentNode) {
      
      context.beginPath();
      context.arc(x, y, 50, 0, 2 * Math.PI); // center-x, center-y, radius, , 360 degrees
      context.stroke();
      // context.drawCircle((150 + x), 0, 50, 50);

      context.font = '30pt Arial';
      context.fillText(currentNode.data, x, y);
      x += 300;
      y += 300;
      currentNode = currentNode.right;
    }
    // context.fillStyle = '#FF0000';
    // context.fillRect(150, 0, 150, 75);
  }



}
