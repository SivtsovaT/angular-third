import { Component, OnInit } from '@angular/core';
import {Auth, createUserWithEmailAndPassword} from "@angular/fire/auth";
import {Router} from "@angular/router";
import firebase from "firebase/compat";
import FirebaseError = firebase.FirebaseError;

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  credentials: SignUpCredentials = new SignUpCredentials();

  constructor(private auth: Auth, private router: Router) {
  }

  ngOnInit(): void {
  }

  async handleSignUp() {
    try {
      await createUserWithEmailAndPassword(this.auth, this.credentials.email, this.credentials.password);
      this.router.navigate(['home']);
    } catch (e) {
      let error = e as FirebaseError;
      this.credentials.errorMessage = error.message;
    }
  }

}

class SignUpCredentials {
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
