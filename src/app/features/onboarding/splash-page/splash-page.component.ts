import { Component, OnInit } from '@angular/core';
import {Auth} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.css']
})
export class SplashPageComponent implements OnInit {

  constructor(private auth: Auth, private router: Router) {
  }



  ngOnInit(): void {
    if (this.auth.currentUser != null) {
      this.router.navigate(['home'])
    } else {
      this.router.navigate(['index'])
    }
  }
}
