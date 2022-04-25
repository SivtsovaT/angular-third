import {Injectable} from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@angular/fire/auth";
import {doc, Firestore, setDoc} from "@angular/fire/firestore";
import firebase from "firebase/compat";
import FirebaseError = firebase.FirebaseError;
import {UserDetails, ValidateCredentials} from "./decorators";

@Injectable({
  providedIn: 'root'
})
export class OnBoardingService {

  constructor(private auth: Auth, private firestore: Firestore) {
  }

  @ValidateCredentials({
    email: 0,
    password: 1
  })
  @UserDetails

  async signUp(email: string, password: string, username?: string, birthday?: string, sex?: string) {
    try {
      const user = await createUserWithEmailAndPassword(this.auth,
        email, password);
      const userId = user.user.uid;
      const documentReference = doc(this.firestore, 'profiles', userId);
      await setDoc(documentReference, {
        username: username,
        birthday: birthday,
        sex: sex
      });
    } catch (e) {
      const error = e as FirebaseError;
      throw error.message;
    }
  }
@ValidateCredentials()
  async signIn(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
    } catch (e) {
      const error = e as FirebaseError;
      throw error.message;
    }
  }
}
