import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor() { }

  togglelBtn(btn: any, btnStatus: string) {
    if (btnStatus === 'disable') {
      btn.setAttribute('disabled', 'true');
    } else if (btnStatus === 'enable') {
      btn.removeAttribute('disabled');
    }
  }
}
