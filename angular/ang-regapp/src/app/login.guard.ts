import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

/*
guard päästää läpi reitistä jos sen canActivate()-metodi
palauttaa true
*/

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  //Tieto siitä onko käyttäjä kirjautunut vai ei, tuodaan auth.Servicen
  //välityksellä tänne

  constructor(private authService: AuthService, private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkIfLoggedIn();
  }
  private checkIfLoggedIn(): boolean {
    // Feikkiloggautuminen: randomilla true tai false
    //const loggedIn: boolean = Math.random() < 0.5;
    //console.log(loggedIn);

    //if (!loggedIn) {
    //  window.alert(
    //    "LoginGuard: The user is not logged in and can't navigate to OtherComponent"
    //  );
    //oikea:
    if (this.authService.isLoggedIn) {
      console.log('logged');
      return true;
    } else {
      console.log('not logged');
      this.router.navigate(['./loginform']);
      return false;
    }
  }
  //return loggedIn;
}
