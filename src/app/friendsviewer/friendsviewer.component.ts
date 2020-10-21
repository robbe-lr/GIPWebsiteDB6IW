import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database'
import { async, BehaviorSubject, Observable } from 'rxjs';
import { combineLatest, switchMap } from 'rxjs/operators';
import { file } from '../models/file';
import * as firebase from 'firebase';
import { AngularFireStorage } from '@angular/fire/storage';
import { User } from '../services/user.model';

@Component({
  selector: 'app-friendsviewer',
  templateUrl: './friendsviewer.component.html',
  styleUrls: ['./friendsviewer.component.scss']
})
export class FriendsviewerComponent implements OnInit {

  fileRef: AngularFirestoreCollection<file>;
  file$: Observable<file[]>
  @Input() uid: string;
  voortoonStatus: boolean;
  @Input() userName;

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) {
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
    this.fileRef = this.db.collection('files', ref => ref.where('uid', '==', this.uid));
    this.file$ = this.fileRef.valueChanges();
  }

  delete(file: file) {
    if (confirm('ben je zeker dat je ' + file.originalName + ' van ' + this.userName + ' wil verwijderen?')) {
      console.log('deleted: ', file.downloadURL);
      this.deleteFileData(file);
    }
  }

  deleteEverything() {
    if (confirm(`ben je zeker dat je alle gegevens van ${this.userName} wil verwijderen?`)) {
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
