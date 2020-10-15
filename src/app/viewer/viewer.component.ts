import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { combineLatest, switchMap } from 'rxjs/operators';
import { file } from '../models/file';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class viewerComponent implements OnInit {

  fileRef: AngularFirestoreCollection<file>;
  file$: Observable<file[]>
  uid: string;


  links: string[] = [
    'https://firebasestorage.googleapis.com/v0/b/testgip-7aa68.appspot.com/o/test%2Fa42rCLhEEeb2dqzgyBp9v7EZD9e2%2Fimages%2F1602613249575_120764135_669245873726707_351419179207221445_n.jpg?alt=media&token=aaebb21d-af83-49c0-848d-109ce3f7de23',
    'https://firebasestorage.googleapis.com/v0/b/testgip-7aa68.appspot.com/o/test%2Fa42rCLhEEeb2dqzgyBp9v7EZD9e2%2Fimages%2F1602614015304_120727803_671851006789115_7581724954054999214_n.jpg?alt=media&token=a856cde1-2199-441f-82ad-3bafb37be7b2']

  constructor(private db: AngularFirestore) {
    this.uid = localStorage.getItem('uid')
    this.fileRef = this.db.collection('files', ref => ref.where('uid', '==', this.uid).where('deleted', '==', false));
    this.file$ = this.fileRef.valueChanges();
  }
  
  updateUserData(file: file) {
    const fileRef: AngularFirestoreDocument<file> = this.db.doc(`files/${file.id}`); //TODO id werkt nog niet

    const data = {
      deleted: true
    };

    return fileRef.set(data, {merge: true});
  }

  ngOnInit(): void {
  }

  delete(link) {
    console.log('deleted: ', link);
  }

}
