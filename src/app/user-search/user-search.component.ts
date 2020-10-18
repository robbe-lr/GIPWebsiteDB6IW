import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  users;
  userRef

  constructor(private db: AngularFirestore) {
    this.userRef = this.db.collection('users');
    this.users = this.userRef.valueChanges();
    console.log(this.users)
    this.users.forEach(user => {
      console.log(user)
    });
   }

  ngOnInit(): void {
  }

}
