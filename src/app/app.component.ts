import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public memoIsActive: boolean = false;
  public timeLineIsActive: boolean = false;
  public dropZoneIsActive: boolean = true;
  constructor(public auth: AuthService) {}

  test() {
    
  }
}
