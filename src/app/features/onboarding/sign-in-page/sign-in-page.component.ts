import { Component, OnInit } from '@angular/core';
import {Auth, signInWithEmailAndPassword} from "@angular/fire/auth";
import {Router} from "@angular/router";
import firebase from "firebase/compat";
import FirebaseError = firebase.FirebaseError;

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  credentials: SignInCredentials = new SignInCredentials();

  constructor(private auth: Auth, private router: Router) {
  }

  ngOnInit(): void {
  }

  async handleSignIn() {
    try {
      await signInWithEmailAndPassword(this.auth, this.credentials.email, this.credentials.password);
      this.router.navigate(['home']);
    } catch (e) {
      let error = e as FirebaseError;
      this.credentials.errorMessage = error.message;
    }
  }
}

class SignInCredentials {
  errorMessage?: string

  private _email?: string;
  private _password?: string;

  get email() {
    return this._email ?? '';
  }

  get password() {
    return this._password ?? '';
  }

  set email(value: string) {
    if (this.errorMessage) {
      this.errorMessage = undefined;
    }
    this._email = value;
  }

  set password(value: string) {
    if (this.errorMessage) {
      this.errorMessage = undefined;
    }
    this._password = value;
  }
}
