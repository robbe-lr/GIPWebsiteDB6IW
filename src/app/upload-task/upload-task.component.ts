import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { stringify } from 'querystring';

@Component({
  selector: 'upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {

  @Input() file: File;
  uid;

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) {

  }

  ngOnInit() {
    this.uid = localStorage.getItem('uid');
    console.log('uidlocal:', this.uid);
    this.startUpload();
  }

  startUpload() {
    var path = '';
    if (this.file.type.localeCompare("image")==1) {
      // The storage path
      path = `test/${this.uid}/images/${Date.now()}_${this.file.name}`;
    } else if (this.file.type.localeCompare("audio") == 1) {
      path = `test/${this.uid}/audio/${Date.now()}_${this.file.name}`;
    } else {
      console.log('file not accepted');
      return;
    }

    console.log('file accepted')
    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize(async () => {
        this.downloadURL = await ref.getDownloadURL().toPromise();

        this.db.collection('files').add({ uid: this.uid, downloadURL: this.downloadURL, path });
      }),
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
