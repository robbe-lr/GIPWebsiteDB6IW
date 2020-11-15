import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { file } from '../models/file';
import { Observable } from 'rxjs';
import { fileURLToPath } from 'url';

@Component({
  selector: 'app-time-line-viewer-row',
  templateUrl: './time-line-viewer-row.component.html',
  styleUrls: ['./time-line-viewer-row.component.scss']
})
export class TimeLineViewerRowComponent implements OnInit {
  fileRef: AngularFirestoreCollection<file>;
  file$: Observable<file[]>
  uid: string;
  @Input() file: file;
  currentLabel: string;
  currentDate: string = '2018-05';
  labelVal: string = undefined;
  dateVal: string = undefined;

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) {
    console.log('file', this.file)
  }

  deleteFileData(file: file) {
    const fileRefDB: AngularFirestoreDocument<file> = this.db.doc(`files/${file.id}`);
    const fileRefSt = this.storage.ref(file.path);
    fileRefSt.delete();

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
    if (this.labelVal != undefined) {
      this.db.doc(`/files/${this.file.id}`).update({ label: this.labelVal });
    }
  }

  ngOnInit(): void {
    this.currentLabel = this.file.label;
    if(this.file.date != null ) {
    this.currentDate = this.file.date;
    } else {
      this.currentDate = "selecteer een datum"
    }
  }

  changeDate(event) { this.dateVal = event.target.value;  }

  updateDate() {
    if (this.dateVal != undefined) {
      this.db.doc(`/files/${this.file.id}`).update({ date: this.dateVal });
    }
    }

}
