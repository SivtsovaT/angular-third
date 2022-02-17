import { Component, OnInit } from '@angular/core';
import {Auth, FacebookAuthProvider, signInWithPopup} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {

  constructor(private auth: Auth, private router: Router) {
  }

  ngOnInit(): void {
  }

  async continueFacebook() {
    const provider = new FacebookAuthProvider();
    provider.setCustomParameters({
      'display': 'popup'
    })
    try {
      const credentials = await signInWithPopup(this.auth, provider);
      this.router.navigate(['home']);
    } catch (e) {

    }
  }
}
