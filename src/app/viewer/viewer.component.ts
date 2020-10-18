import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database'
import { BehaviorSubject, Observable } from 'rxjs';
import { combineLatest, switchMap } from 'rxjs/operators';
import { file } from '../models/file';
import * as firebase from 'firebase';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class viewerComponent implements OnInit {

  fileRef: AngularFirestoreCollection<file>;
  file$: Observable<file[]>
  uid: string;
  voortoonStatus: boolean;

  constructor(private db: AngularFirestore, private rtdb: AngularFireDatabase) {
    this.uid = localStorage.getItem('uid')
    this.fileRef = this.db.collection('files', ref => ref.where('uid', '==', this.uid).where('deleted', '==', false));
    this.file$ = this.fileRef.valueChanges();
  }
  
  updateFileData(file: file) {
    const fileRef: AngularFirestoreDocument<file> = this.db.doc(`files/${file.id}`);

    const data = {
      deleted: true,
      deletedAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    return fileRef.set(data, {merge: true});
  }

  ngOnInit(): void {
  }

  delete(file: file) {
    console.log('deleted: ', file.downloadURL);
    this.updateFileData(file);
  }

  voortoonVerandering() {
    this.voortoonStatus = !this.voortoonStatus;
  }


}
