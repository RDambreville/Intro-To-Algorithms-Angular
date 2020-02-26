import { BSTNode } from './../models/bst-node';
import { Injectable } from '@angular/core';
import { Node } from '../models/node';
import { BinaryNode } from '../models/binary-node';
import { BinarySearchTree } from '../models/binary-search-tree';
import { CanvasSize } from 'src/app/shared/constants/canvas-size';
import { Stack } from '../models/stack';

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
    this.setLocalVars(nodeToHighlight, searchCondition, color);
    this.setStroke('green', 2.0);
    this.initCoordinates(CanvasSize.x / 2, 40);
    this.traverseTreeAndDraw(bst.root, this.x, this.y);
  }


  setupCanvas(canvasId: string): void {
    this.canvas = <HTMLCanvasElement>document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
    this.clearCanvas();
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

  initCoordinates(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  traverseTreeAndDraw(currentNode: BSTNode, x: number, y: number) {
    if (currentNode) {
      this.drawNode(CanvasSize.x / 35, 0, 2 * Math.PI, x, y, currentNode);
      if (currentNode.left) {
        this.drawDiagonalEdge(currentNode, x, y, 'left');
        this.traverseTreeAndDraw(currentNode.left, (x - 40), (y + 40));
      }
      if (currentNode.right) {
        this.drawDiagonalEdge(currentNode, x, y, 'right');
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

    // put text in center of circle
    this.drawNodeText(currentNode.data, x, y - 5);
  }

  drawNodeText(text: string, x: number, y: number): void {
    // Draw node data inside circle
    this.context.font = (CanvasSize.x / 50) + 'pt Arial';
    this.context.fillStyle = 'black';
    this.context.fillText(text, x - 5, y + 10);
  }

  drawDiagonalEdge(currentNode: BSTNode, x: any, y: any, direction: string): void {
    this.setStroke('green', 2.0);
    this.context.beginPath();
    if (direction === 'left' && currentNode.left) {
      this.context.moveTo(x - 10, y + 10);
      this.context.lineTo(x - 40, y + 40);
    } else if (direction === 'right' && currentNode.right) {
      this.context.moveTo(x + 10, y + 10);
      this.context.lineTo(x + 40, y + 40);
    }
    this.context.stroke();
  }


  drawStack(canvasId: string, stack: Stack): void {
    this.setupCanvas(canvasId);
    this.initCoordinates(this.canvas.width / 2, 10);
    this.setStroke('green', 2.0);
    const length = stack.stackArray.length - 1;
    for (let i = 0; i <= length; i++) {
      this.drawRectBorder(i);
      this.fillRectBody('white', i);
      this.drawRectTextData(stack.stackArray[length - i], i);
    }
  }

  drawRectBorder(index: number): void {
    this.context.beginPath();
    this.context.rect(this.x / 2, this.y + (50 * index), 100, 50);
    this.context.stroke();
  }

  fillRectBody(color: string, index: number) {
    this.context.fillStyle = color;
    this.context.beginPath();
    this.context.rect(this.x / 2, this.y + (50 * index), 100, 50);
    this.context.fill();
  }

  drawRectTextData(data: any, index: number): void {
    this.context.font = (CanvasSize.x / 50) + 'pt Arial';
    this.context.fillStyle = 'black';
    this.context.fillText(data, (this.x / 2) + 50, (index + 1) * 50);
  }


  drawBinaryTree(canvasId: string, rootNode: BinaryNode): void {

  }

  drawLinkedList(canvasId: string, rootNode: Node): void {

  }

  drawPoint(x: number, y: number): void {
    this.setStroke('green', 2.0);
    this.drawNode(CanvasSize.x / 35, 0, 2*Math.PI, x, y, new BSTNode(x + ', ' + y));
  }

  resetCoordinates(newX: number, newY: number): void {
    this.x = newX;
    this.y = newY;
  }
}
