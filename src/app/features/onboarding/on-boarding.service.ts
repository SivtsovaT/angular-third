import {Injectable} from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@angular/fire/auth";
import {doc, Firestore, setDoc} from "@angular/fire/firestore";
import {Email,Password,StringifyFirebaseError, UserDetails,ValidateArguments} from "./decorators";

@Injectable({
  providedIn: 'root'
})
export class OnBoardingService {

  constructor(private auth: Auth, private firestore: Firestore) {
  }

  @ValidateArguments
  @UserDetails

  @StringifyFirebaseError
  async signUp(@Email email: string, @Password password: string, username?: string,birthday?: string, sex?: string) {
    const user = await createUserWithEmailAndPassword(this.auth, email, password);
    const userId = user.user.uid;
    const documentReference = doc(this.firestore, 'profiles', userId);
    await setDoc(documentReference, {
      username: username,
      birthday: birthday,
      sex: sex
    });
  }
  @ValidateArguments
  @StringifyFirebaseError
  async signIn(@Email email: string, @Password password: string) {
    await signInWithEmailAndPassword(this.auth, email, password);
  }
}

