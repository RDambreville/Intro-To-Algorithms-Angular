import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { CanvasSize } from 'src/app/shared/constants/canvas-size';
import { DrawingService } from '../../services/drawing.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit, AfterViewInit {

  @Input() id: string;
  canvasSize = CanvasSize;

  constructor(private drawingService: DrawingService) {}

  ngOnInit() {
    console.log(this.id);
  }

ngAfterViewInit() {
  this.drawingService.setupCanvas(this.id);
}

  handleMouse(event: any): void {
    // console.log('mouse event', event);
    // if (event && event.buttons === 1) { // if left button is pressed
    //   this.drawingService.drawPoint(event.offsetX, event.offsetY);
    // }

    // this.drawingService.drawPoint(event.offsetX, event.offsetY);
    // this.drawingService.checkForPreExistingPaint(event.offsetX, event.offsetY);
    this.drawingService.checkForPreExistingPaint(event.layerX, event.layerY);
  }

}
