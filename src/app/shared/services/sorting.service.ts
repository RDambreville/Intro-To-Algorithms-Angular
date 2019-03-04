import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  constructor() { }

  parseInputArr(inputStr) {
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

  swap(a: any, b: any) {
    const temp = a;
    a = b;
    b = temp;
  }

}
