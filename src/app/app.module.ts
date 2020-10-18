import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage'
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { SuperSecretComponent } from './super-secret/super-secret.component';
import { DropzoneDirective } from './dropzone.directive';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { viewerComponent } from './viewer/viewer.component';
import { UserSearchComponent } from './user-search/user-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperSecretComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
    NavbarComponent,
    viewerComponent,
    UserSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(/*environment.firebase**/{
      apiKey: "AIzaSyCf3WxjDOij76IlI-q31hQZ7pA8RhGnzX4",
      authDomain: "testgip-7aa68.firebaseapp.com",
      databaseURL: "https://testgip-7aa68.firebaseio.com",
      projectId: "testgip-7aa68",
      storageBucket: "testgip-7aa68.appspot.com",
      messagingSenderId: "596922972118",
      appId: "1:596922972118:web:494bfd03e863097dc65677",
      measurementId: "G-BNH4EVY66W"
    }),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
