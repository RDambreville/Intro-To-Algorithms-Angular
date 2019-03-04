import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  constructor() { }

  swap(a: any, b: any) {
    const temp = a;
    a = b;
    b = temp;
  }
}
