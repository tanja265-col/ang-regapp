import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
/*
LoginGuard on apulaisluokka (helper), jolla voidaan tehdä reitityksen esto.
Guardin runko voidaan luoda Angular CLI:llä komennolla: ng g guard guardinnimi.
Kun canActivate() -metodi palauttaa true, on reitti auki, muuten kiinni.
*/
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  canActivate(): boolean {
    return this.checkIfLoggedIn();
  }

  private checkIfLoggedIn(): boolean {
    // Feikkiloggautuminen: randomilla true tai false
    const loggedIn: boolean = Math.random() < 0.5;
    console.log(loggedIn);

    if (!loggedIn) {
      window.alert('LoginGuard: The user is not logged in and can\'t navigate to OtherComponent');
    }
    return loggedIn;
  }
}
