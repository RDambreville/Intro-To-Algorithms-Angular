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
  animationSpeed: number;
  color: string;
  nodeToHighlight: BSTNode;
  searchCondition: string;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor() { }

  drawBSTTree(canvasId: string, bst: BinarySearchTree, nodeToHighlight?: BSTNode, searchCondition?: string, color?: string): void {
    this.setupCanvas(canvasId);
    this.clearCanvas();
    this.setLocalVars(nodeToHighlight, searchCondition, color);
    this.setStroke('green', 2.0);
    this.initCoordinates();
    const currentNode = bst.root;
    this.traverseTreeAndDraw(currentNode, this.x, this.y);
  }


  setupCanvas(canvasId: string): void {
    this.canvas = <HTMLCanvasElement>document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
  }

  clearCanvas(): void {
    this.context.clearRect(0, 0, CanvasSize.x, CanvasSize.x);
  }

  setLocalVars(nodeToHighlight?: BSTNode, searchCondition?: string, color?: string): void {
    this.nodeToHighlight = nodeToHighlight;
    this.searchCondition = searchCondition;
    this.color = color;
  }


  setStroke(color: string, lineWidth: number): void {
    this.context.strokeStyle = color;
    this.context.lineWidth = lineWidth;
  }

  initCoordinates(): void {
    this.x = CanvasSize.x / 2;
    this.y = 40 /*CanvasSize.y / 2*/;
  }

  traverseTreeAndDraw(currentNode: BSTNode, x: number, y: number) {
    if (currentNode) {
      this.drawNode(CanvasSize.x / 35, 0, 2 * Math.PI, x, y, currentNode);
      this.drawNodeText(currentNode.data, x, y - 5); // put text in center of circle
      if (currentNode.left) {
        this.drawEdge(x, y, 'left');
        this.traverseTreeAndDraw(currentNode.left, (x - 40), (y + 40));
      }
      if (currentNode.right) {
        this.drawEdge(x, y, 'right');
        this.traverseTreeAndDraw(currentNode.right, (x + 40), (y + 40));
      }
    }
  }

  drawNode(radius: number, startAngle: number, endAngle: number, x: number, y: number,
    currentNode: BSTNode): void {
    if (this.nodeToHighlight && currentNode === this.nodeToHighlight) {

      this.setStroke(this.color ? this.color : 'yellow', 2.0);
    }
    this.context.beginPath();
    this.context.arc(x, y, radius, startAngle, endAngle);  // define circle with center at (x, y)
    this.context.stroke(); // draw the circle border

    // fill in circle with white
    this.context.fillStyle = 'white';
    this.context.beginPath();
    this.context.arc(x, y, radius - 1, startAngle, endAngle);
    this.context.fill();
  }

  drawNodeText(text: string, x: number, y: number): void {
    // Draw node data inside circle
    this.context.font = (CanvasSize.x / 50) + 'pt Arial';
    this.context.fillStyle = 'black';
    this.context.fillText(text, x - 5, y + 10);
  }

  drawEdge(x: any, y: any, direction: string): void {
    this.setStroke('green', 2.0);
    this.context.beginPath();
    if (direction === 'left') {
      this.context.moveTo(x - 10, y + 10);
      this.context.lineTo(x - 40, y + 40);
    } else {
      this.context.moveTo(x + 10, y + 10);
      this.context.lineTo(x + 40, y + 40);
    }
    this.context.stroke();
  }


  drawBinaryTree(canvasId: string, rootNode: BinaryNode): void {

  }

  drawLinkedList(canvasId: string, rootNode: Node): void {

  }

  resetCoordinates(newX: number, newY: number): void {
    this.x = newX;
    this.y = newY;
  }
}
