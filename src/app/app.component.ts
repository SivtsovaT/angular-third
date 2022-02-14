import { Component } from '@angular/core';
import {environment} from "../environments/environment";
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@angular/fire/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-third';
  versionName = environment.versionName;

  constructor(auth: Auth) {
    createUserWithEmailAndPassword(auth, 'test1@test.com', 'qwerty')
      .then(user => console.log(user))
      .catch(error => console.error(error));

   /* signInWithEmailAndPassword(auth, 'test1@test.com', 'qwerty')
      .then(user => console.log(user))
      .catch(error => console.error(error));*/
  }

}
