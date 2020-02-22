import { Component, OnInit, Input } from '@angular/core';
import { CanvasSize } from 'src/app/shared/constants/canvas-size';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  @Input() id: string;
  canvasSize = CanvasSize;

  constructor() { }

  ngOnInit() {
    console.log(this.id);
  }

}
