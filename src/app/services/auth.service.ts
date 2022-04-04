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

signIn (email: string, password: string){
  return this.afAuth
  .signInWithEmailAndPassword(email, password)
  .then((result) => {
    if (result.user){
      this.getUserData(result.user?.uid).then((users) => {
        users.forEach((user) => {
          localStorage.setItem('user', JSON.stringify(user.data()));
        });
      });
    }
    this.router.navigate(['dashboard']);
  })
  .catch((error) => {
    console.log(error);
  });
}

async getUserData (uid: string){
  const docRef = this.firestore.collection('users').ref;

  return await docRef.where('uid', '==', uid).get(); 

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

PasswordReset(email: string){
  return this.afAuth
  .sendPasswordResetEmail(email)
  .then(()=> {
    window.alert('Um email foi enviado para recuperar sua senha! Verifique sua caixa da entrada ');
  })
  .catch((error: any) => {
    window.alert('Preencha o campo de e-mail');
  });
}

async signOut(){
  try{
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['sign-in']);

  } catch(error) {
    console.log(error);
  }
}

}

