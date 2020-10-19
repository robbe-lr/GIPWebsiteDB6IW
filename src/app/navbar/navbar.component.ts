import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public auth: AuthService, private AppComponent: AppComponent) { }
  navIsActive: boolean = false;

  toggleNav() {
    this.navIsActive = !this.navIsActive
  }
  dropZoneLink() {
    this.AppComponent.myDropZoneIsActive = true;
    this.AppComponent.vriendenIsActive = false;
  }
  vriendenLink() {
    this.AppComponent.myDropZoneIsActive = false;
    this.AppComponent.vriendenIsActive = true;
  }
}
