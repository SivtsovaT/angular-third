import {Component, OnInit} from '@angular/core';
import {Auth, createUserWithEmailAndPassword} from "@angular/fire/auth";
import {Router} from "@angular/router";
import firebase from "firebase/compat";
import FirebaseError = firebase.FirebaseError;
import {doc, docData, Firestore, setDoc} from "@angular/fire/firestore";
import {OnBoardingService} from "../on-boarding.service";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  credentials: SignUpCredentials = new SignUpCredentials();

  constructor (private boarding: OnBoardingService, private router: Router) {
  }

  ngOnInit(): void {
  }

  async handleSignUp() {
    try {
      await this.boarding.signUp(this.credentials.email, this.credentials.password,
       /* this.credentials.username,
        this.credentials.birthday,
        this.credentials.sex*/);
      this.router.navigate(['home']);
    } catch (e) {
      this.credentials.errorMessage = e as string;
    }
  }

}

class SignUpCredentials {
  errorMessage?: string

  private _email?: string;
  private _password?: string;
  username?: string;
  sex?: string;
  birthday?: string;

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
