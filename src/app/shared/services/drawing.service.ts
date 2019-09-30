import { BSTNode } from './../models/bst-node';
import { Injectable } from '@angular/core';
import { Node } from '../models/node';
import { BinaryNode } from '../models/binary-node';

@Injectable({
  providedIn: 'root'
})
export class DrawingService {

  x: number;
  y: number;
  canvas: HTMLElement;
  context: CanvasRenderingContext2D;
  constructor() { }

  drawBSTTree(canvasId: string, rootNode: BSTNode): void {
    this.setupCanvas(canvasId);
    this.setupStroke('green', 5.0);
    this.initCoordinates();
    const currentNode = rootNode;
    this.loopOverTreeAndDraw(currentNode);
  }

  drawBinaryTree(canvasId: string, rootNode: BinaryNode): void {

  }

  drawLinkedList(canvasId: string, rootNode: Node): void {

  }

  drawCircle(radius: number, startAngle: number, endAngle: number): void {
    this.context.beginPath();
    // define circle
    this.context.arc(this.x, this.y, radius, startAngle, endAngle);
    this.context.stroke(); // draw the circle border

    // fill in circle with white
    this.context.fillStyle = 'white';
    this.context.beginPath();
    this.context.arc(this.x, this.y, radius - 5, startAngle, endAngle);
    this.context.fill();

  }

  drawNodeText(text: string): void {
      // Draw node data inside circle
      this.context.font = '30pt Arial';
      this.context.fillStyle = 'black';
      this.context.fillText(text, this.x - 10, this.y + 15);
  }

  setupCanvas(canvasId: string): void {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
  }

  setupStroke(color: string, lineWidth: number): void {
    this.context.strokeStyle = color; // set the color for the circle to 'green'
    this.context.lineWidth = lineWidth;
  }

  initCoordinates(): void {
    this.x = 100;
    this.y = 100;
  }

  loopOverTreeAndDraw(currentNode: BSTNode) {
    while (currentNode) {
      this.drawCircle(50, 0 , 2 * Math.PI);
      this.drawNodeText(currentNode.data);
      this.updateCoordinates(300, 300);
      // move to next node in tree
      currentNode = currentNode.right;
    }
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