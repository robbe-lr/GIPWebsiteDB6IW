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
import { VriendenComponent } from './vrienden/vrienden.component';
import { HttpClientModule } from '@angular/common/http';
import { FriendsviewerComponent } from './friendsviewer/friendsviewer.component';
import { UploaderFriendsComponent } from './uploader-friends/uploader-friends.component';
import { UploadTaskFriendsComponent } from './upload-task-friends/upload-task-friends.component';
import { TimeLinePageComponent } from './time-line-page/time-line-page.component';
import { MemoPageComponent } from './memo-page/memo-page.component';
import { MemoViewerComponent } from './memo-viewer/memo-viewer.component';
import { TimeLineViewerComponent } from './time-line-viewer/time-line-viewer.component';
import { MemoViewerRowComponent } from './memo-viewer-row/memo-viewer-row.component';
import { TimeLineViewerRowComponent } from './time-line-viewer-row/time-line-viewer-row.component';
import { DropZonePageComponent } from './drop-zone-page/drop-zone-page.component'

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
    VriendenComponent,
    FriendsviewerComponent,
    UploaderFriendsComponent,
    UploadTaskFriendsComponent,
    TimeLinePageComponent,
    MemoPageComponent,
    MemoViewerComponent,
    TimeLineViewerComponent,
    MemoViewerRowComponent,
    TimeLineViewerRowComponent,
    DropZonePageComponent,
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
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
