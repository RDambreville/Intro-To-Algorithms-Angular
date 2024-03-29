import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  constructor() { }

  parseInputArr(inputStr): any[] {
    if (inputStr.length > 0) {
      if (inputStr.includes(', ')) {
        return inputStr.split(', ').map(item => item = Number.parseInt(item, 10));
      } else if (inputStr.includes(',')) {
        return inputStr.split(',').map(item => item = Number.parseInt(item, 10));
      } else if (inputStr.includes('')) {
        return inputStr.split('').map(item => item = Number.parseInt(item, 10));
      }
  }
}

}
