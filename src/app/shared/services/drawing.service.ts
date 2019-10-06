import { BSTNode } from './../models/bst-node';
import { Injectable } from '@angular/core';
import { Node } from '../models/node';
import { BinaryNode } from '../models/binary-node';
import { BinarySearchTree } from '../models/binary-search-tree';
import { CanvasSize } from 'src/app/shared/constants/canvas-size';

@Injectable({
  providedIn: 'root'
})
export class DrawingService {

  x: number;
  y: number;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor() { }

  drawBSTTree(canvasId: string, bst: BinarySearchTree): void {
    this.setupCanvas(canvasId);
    this.setStroke('green', 2.0);
    this.initCoordinates();
    const currentNode = bst.root;
    this.loopOverTreeAndDraw(currentNode);
  }

  drawBinaryTree(canvasId: string, rootNode: BinaryNode): void {

  }

  drawLinkedList(canvasId: string, rootNode: Node): void {

  }

  drawNode(radius: number, startAngle: number, endAngle: number): void {
    this.context.beginPath();
    // define circle
    this.context.arc(this.x, this.y, radius, startAngle, endAngle);
    this.context.stroke(); // draw the circle border

    // fill in circle with white
    this.context.fillStyle = 'white';
    this.context.beginPath();
    this.context.arc(this.x, this.y, radius - 1, startAngle, endAngle);
    this.context.fill();

    this.drawEdge(1, 2);

  }

  drawEdge(point1: any, point2: any): void {
    this.context.beginPath();
    this.context.moveTo(500, 500);
    this.context.lineTo(200, 400);
    this.context.stroke();
    // 225 degrees (lower left) or 315 degrees (lower right)
  }

  drawNodeText(text: string): void {
      // Draw node data inside circle
      this.context.font = (CanvasSize.x / 50) + 'pt Arial';
      this.context.fillStyle = 'black';
      this.context.fillText(text, this.x - 5, this.y + 10);
  }

  setupCanvas(canvasId: string): void {
    this.canvas = <HTMLCanvasElement> document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
  }

  setStroke(color: string, lineWidth: number): void {
    this.context.strokeStyle = color; // set the color for the circle to 'green'
    this.context.lineWidth = lineWidth;
  }

  initCoordinates(): void {
    this.x = CanvasSize.x / 2;
    this.y = 40;
  }

  loopOverTreeAndDraw(currentNode: BSTNode) {
    // if (!currentNode.parent) {
    //   this.drawNode(CanvasSize.x / 50, 0 , 2 * Math.PI);
    //   this.drawNodeText(currentNode.data);
    //   this.updateCoordinates(CanvasSize.x / 20, CanvasSize.y / 20);
    // }
    if (currentNode) {
      this.loopOverTreeAndDraw(currentNode.left);
      this.drawNode(CanvasSize.x / 50, 0 , 2 * Math.PI);
      this.drawNodeText(currentNode.data);
      this.updateCoordinates(CanvasSize.x / 20, CanvasSize.y / 20);
      this.loopOverTreeAndDraw(currentNode.left);
    }

    // while (currentNode) {
    //   this.drawNode(CanvasSize.x / 50, 0 , 2 * Math.PI);
    //   this.drawNodeText(currentNode.data);
    //   this.updateCoordinates(CanvasSize.x / 20, CanvasSize.y / 20);
    //   // move to next node in tree
    //   currentNode = currentNode.right;
    // }
  }

  updateCoordinates(offsetX: number, offsetY: number): void {
    this.x += offsetX;
    this.y += offsetY;
  }

  resetCoordinates(newX: number, newY: number): void {
    this.x = newX;
    this.y = newY;
  }

  clearCanvas(): void {
    this.context.clearRect(0, 0, 3000, 3000);
  }
}
