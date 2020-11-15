import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database'
import { async, BehaviorSubject, Observable } from 'rxjs';
import { combineLatest, switchMap } from 'rxjs/operators';
import { file } from '../models/file';
import * as firebase from 'firebase';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-time-line-viewer',
  templateUrl: './time-line-viewer.component.html',
  styleUrls: ['./time-line-viewer.component.scss']
})
export class TimeLineViewerComponent implements OnInit {

  fileRef: AngularFirestoreCollection<file>;
  file$: Observable<file[]>
  uid: string;
  
  constructor(private db: AngularFirestore, private storage: AngularFireStorage) {
    this.uid = localStorage.getItem('uid')
    this.fileRef = this.db.collection('files', ref => ref.where('uid', '==', this.uid).orderBy("date"));
    this.file$ = this.fileRef.valueChanges();
    console.log(this.file$)
  }

  ngOnInit(): void {
  }

}
