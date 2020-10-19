import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public myDropZoneIsActive: boolean = true;
  public vriendenIsActive: boolean = false;
  constructor(public auth: AuthService) {}

  test() {
    
  }
}
