import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {environment} from "../environments/environment";
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HomePageComponent } from './features/onboarding/home-page/home-page.component';
import { IndexPageComponent } from './features/onboarding/index-page/index-page.component';
import { SignInPageComponent } from './features/onboarding/sign-in-page/sign-in-page.component';
import { SignInPhonePageComponent } from './features/onboarding/sign-in-phone-page/sign-in-phone-page.component';
import { SignUpPageComponent } from './features/onboarding/sign-up-page/sign-up-page.component';
import { SplashPageComponent } from './features/onboarding/splash-page/splash-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    IndexPageComponent,
    SignInPageComponent,
    SignInPhonePageComponent,
    SignUpPageComponent,
    SplashPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'signUpEmail', component: SignUpPageComponent},
      {path: 'signInEmail', component: SignInPageComponent},
      {path: 'signInPhone', component: SignInPhonePageComponent},
      {path: 'index', component: IndexPageComponent},
      {path: '**', component: SplashPageComponent}
    ]),
    provideAuth(() => {
      const auth = getAuth();
      return auth;
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => {
      const firestore = getFirestore();
      return firestore;
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
