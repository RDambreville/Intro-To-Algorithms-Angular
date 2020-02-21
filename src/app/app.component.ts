import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation } from './shared/constants/animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'intro-to-algorithms';

  prepareRoute(outlet: RouterOutlet) {
    // return outlet && outlet.activatedRouteData && 
    // outlet.activatedRouteData['animation'];
    return outlet.isActivated ? outlet.activatedRoute : '';

  }
}
