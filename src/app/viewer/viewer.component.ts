import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database'
import { async, BehaviorSubject, Observable } from 'rxjs';
import { combineLatest, switchMap } from 'rxjs/operators';
import { file } from '../models/file';
import * as firebase from 'firebase';
import { AngularFireStorage } from '@angular/fire/storage';

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

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) {
    this.uid = localStorage.getItem('uid')
    this.fileRef = this.db.collection('files', ref => ref.where('uid', '==', this.uid));
    this.file$ = this.fileRef.valueChanges();
  }

  deleteFileData(file: file) {
    const fileRefDB: AngularFirestoreDocument<file> = this.db.doc(`files/${file.id}`);
    const fileRefSt = this.storage.ref(file.path);
    fileRefSt.delete();

    // const data = {
    //   deleted: true,
    //   deletedAt: firebase.firestore.FieldValue.serverTimestamp()
    // };

    return fileRefDB.delete();
  }

  ngOnInit(): void {
  }

  delete(file: file) {
    if (confirm('ben je zeker dat je ' + file.originalName + ' wil verwijderen?')) {
      console.log('deleted: ', file.downloadURL);
      this.deleteFileData(file);
    }
  }

  deleteEverything() {
    if (confirm("ben je zeker dat je alle gegevens wil verwijderen?")) {
      this.file$.forEach(file => {
        file.forEach(file => {
          this.deleteFileData(file);
        });
      })
    }
  }

  voortoonVerandering() {
    this.voortoonStatus = !this.voortoonStatus;
  }


}
