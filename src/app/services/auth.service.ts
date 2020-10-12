import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';
import { createNgModule } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User>;
  public user: User;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    this.user = credential.user;
    localStorage.setItem('uid', this.user.uid);
    console.log(this.user);
    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.afAuth.signOut();
    this.user = null;
    localStorage.setItem('uid', null);
    return this.router.navigate(['/']);
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photURL: user.photoURL
    };

    return userRef.set(data, {merge: true});
  }
}
