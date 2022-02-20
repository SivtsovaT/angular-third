import {Component} from '@angular/core';
import {Auth, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {doc, Firestore, getDoc, setDoc} from "@angular/fire/firestore";

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent {

  constructor(private auth: Auth, private router: Router, private firestore: Firestore) {
  }

  async continueFacebook() {
    const provider = new FacebookAuthProvider();
    provider.setCustomParameters({
      'display': 'popup'
    })
    try {
      const credentials = await signInWithPopup(this.auth, provider);
      if (credentials.user.metadata.creationTime === credentials.user.metadata.lastSignInTime) {
        //TODO: navigate to fill profile pages
        const userId = credentials.user.uid;
        const documentReference = doc(this.firestore, 'profiles', userId);
        await setDoc(documentReference, {
          username: 'facebook 1',
          birthday: '12/12/2000',
          sex: 'female'
        });
        this.router.navigate(['home']);
      } else {
        const userId = credentials.user.uid;
        const documentReference = doc(this.firestore, 'profiles', userId);
        const data = await getDoc(documentReference);
        if (data.exists()) {
          this.router.navigate(['home']);
        } else {
          //TODO: navigate to fill profile pages
          await setDoc(documentReference, {
            username: 'facebook 1',
            birthday: '12/12/2000',
            sex: 'female'
          });
          this.router.navigate(['home']);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  async continueGoogle() {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      'display': 'popup',
      'login_hint': 'user@example.com'
    })
    try {
      const credentials = await signInWithPopup(this.auth, provider);
      if (credentials.user.metadata.creationTime === credentials.user.metadata.lastSignInTime) {
        //TODO: navigate to fill profile pages
        const userId = credentials.user.uid;
        const documentReference = doc(this.firestore, 'profiles', userId);
        await setDoc(documentReference, {
          username: 'google 1',
          birthday: '12/12/2000',
          sex: 'female'
        });
        this.router.navigate(['home']);
      } else {
        const userId = credentials.user.uid;
        const documentReference = doc(this.firestore, 'profiles', userId);
        const data = await getDoc(documentReference);
        if (data.exists()) {
          this.router.navigate(['home']);
        } else {
          //TODO: navigate to fill profile pages
          await setDoc(documentReference, {
            username: 'google 1',
            birthday: '12/12/2000',
            sex: 'female'
          });
          this.router.navigate(['home']);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
}
