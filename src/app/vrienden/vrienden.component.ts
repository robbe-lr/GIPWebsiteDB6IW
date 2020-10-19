import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../services/user.model';

@Component({
  selector: 'app-vrienden',
  templateUrl: './vrienden.component.html',
  styleUrls: ['./vrienden.component.scss']
})
export class VriendenComponent implements OnInit {
  email: string;
  ref;
  personsUid;
  ownUid;
  friendsRef;
  friends$;
  user: User;

  constructor(private db: AngularFirestore) { 
    this.ownUid = localStorage.getItem('uid');
    this.friendsRef = this.db.collection('friends', ref => ref.where('uids', 'array-contains', this.ownUid))
    this.friends$ = this.friendsRef.valueChanges();
  }

  ngOnInit(): void {
  }

  onTextEnter() {
    this.ref = this.db.collection('users', ref => ref.where('email', '==', this.email)).valueChanges();
    this.ref.forEach(el => {
      el.forEach(el => {
        this.personsUid = el.uid;
        console.log(el)
        this.db.collection('friends').add({uids: [this.personsUid, this.ownUid]});
      })
    })
    
    console.log('hi', this.email);
    this.email = "";
  }

  getName (uid) {
    this.db.doc(`users/${uid}`).valueChanges().forEach(el => {
      this.user = el;
      console.log(this.user)
    });
    return this.user.displayName
  }

}
