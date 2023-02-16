import { Injectable } from '@angular/core';
import {Auth, authState, signInWithPopup, GoogleAuthProvider, UserCredential, signOut, User } from '@angular/fire/auth';
import {Router} from '@angular/router';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!: User | null;
  login = false;

  getAuthState(){
    return authState(this.auth).subscribe(user => {
      this.user = user
    });
  }

  constructor(private auth: Auth, private router: Router) {
    this.getAuthState();
  }

  loginWithGoogle(){
    return from(new Promise<string>(async (resolve, reject) => {
      try{
        await signInWithPopup(this.auth, new GoogleAuthProvider());
        console.log('login success');
        resolve(' login success');
        this.router.navigate(['/home'])
        this.login = true;
      }catch{
        console.log('login failed');
        this.login = false;
        reject('login failed');
      }
    }));
  }

  logout(){
    return from(new Promise<string>(async(resolve, reject) => {
      try{
        await signOut(this.auth);
        this.login = false;
        console.log('logout success');
        resolve('logout success');
        this.router.navigate(['/login'])
      }catch{
        console.log('logout failed');
        this.login = true;
        reject('logout failed');
      }
    }));
  }
}
