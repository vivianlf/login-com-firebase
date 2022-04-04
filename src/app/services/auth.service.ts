import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFirestore,
        AngularFirestoreDocument
} from '@angular/fire/compat/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth, 
    private firestore : AngularFirestore, 
    private router : Router ) { }


signUp (user: User, password: string){
  return this.afAuth
  .createUserWithEmailAndPassword(user.email, password)
  .then((result: any) => {
    this.SetUserData(result.user, user);
    this.router.navigate(['email-verification']);
  })
  .catch((error: any) => {
    console.log(error);
  });
  }

SetUserData (loginResponse: any, user: User){
  const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
    'users/${loginResponse.uid}'
  );

  const userData: User = {
    uid: loginResponse.uid,
    email: user.email,
    name: user.name,
  };

  return userRef.set(userData, {
    merge: true,
  });

}

}

