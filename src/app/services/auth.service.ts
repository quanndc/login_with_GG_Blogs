import { Injectable } from '@angular/core';
import {Auth, authState, signInWithPopup, GoogleAuthProvider, UserCredential, signOut, User } from '@angular/fire/auth';
import {Router} from '@angular/router';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // user?: User;

  constructor(private auth: Auth, private router: Router) { }

  loginWithGoogle(){
    return from(new Promise<string>(async (resolve, reject) => {
      try{
        await signInWithPopup(this.auth, new GoogleAuthProvider());
        console.log('login success');
        resolve(' login success');
      }catch{
        console.log('login failed');
        reject('login failed');
      }
    }));
  }

  logout(){
    return from(new Promise<string>(async(resolve, reject) => {
      try{
        await signOut(this.auth);
        resolve('logout success');
      }catch{
        reject('logout failed');
      }
    }));
  }
}
