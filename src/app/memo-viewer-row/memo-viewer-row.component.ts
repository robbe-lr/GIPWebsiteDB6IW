import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { file } from '../models/file';
import { Observable } from 'rxjs';
import { fileURLToPath } from 'url';

@Component({
  selector: 'app-memo-viewer-row',
  templateUrl: './memo-viewer-row.component.html',
  styleUrls: ['./memo-viewer-row.component.scss']
})
export class MemoViewerRowComponent implements OnInit {

  fileRef: AngularFirestoreCollection<file>;
  file$: Observable<file[]>
  uid: string;
  @Input() file: file;
  currentLabel: string
  labelVal: string = "test";

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) {
    console.log('file', this.file)
    this.labelVal = "test"
    //this.uid = localStorage.getItem('uid')
    //this.fileRef = this.db.collection('files', ref => ref.where('uid', '==', this.uid));
    //this.file$ = this.fileRef.valueChanges();
  }

  deleteFileData(file: file) {
    const fileRefDB: AngularFirestoreDocument<file> = this.db.doc(`files/Memo/files/${file.id}`);
    const fileRefSt = this.storage.ref(file.path);
    fileRefSt.delete();

    // const data = {
    //   deleted: true,
    //   deletedAt: firebase.firestore.FieldValue.serverTimestamp()
    // };

    return fileRefDB.delete();
  }

  delete() {
    if (confirm('ben je zeker dat je ' + this.file.originalName + ' wil verwijderen?')) {
      console.log('deleted: ', this.file.downloadURL);
      this.deleteFileData(this.file);
    }
  }

  onKey(event) { this.labelVal = event.target.value; }

  updateLabel() {
    console.log('hi', this.labelVal);
    if (this.labelVal != undefined) {
      this.db.doc(`files/Memo/files/${this.file.id}`).update({ label: this.labelVal });
    }
  }

  ngOnInit(): void {
    this.currentLabel = this.file.label;
  }

}
