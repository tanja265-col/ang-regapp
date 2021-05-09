import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //säilyttää tietoa siitä onko käyttäjä kirjautunut sisään vai ei
  isLoggedIn: boolean;

  constructor() {
    // aluksi kirjautuminen false, joten ei päästä salatulle sivulle sisään (guardilla suojatulle)
    this.isLoggedIn = false;
  }

  // Jos tunnarit lähetettäisiiin serverille ja tieto kirjautumisen
  // onnistumisesta haettaisiin serveriltä, niin ne metodit
  // tulisivat tähän. Yhteys palvelimeen tehtäisiin httpClientin avulla.
}
