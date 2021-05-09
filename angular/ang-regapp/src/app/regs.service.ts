import { Injectable } from '@angular/core';
//HttpClient tarvitaan datan lähettämiseen palvelimelle ja sen hakemiseen palvelimelta
import { HttpClient } from '@angular/common/http';

//Palvelimelta tuleva data toimitetaan komponentille Observablena eli reaktiivisesti.
import { Observable } from 'rxjs';

//tietotyyppi
import { Data, registration } from './data';

//data serviceen

//voidaan liittää komponenttiin
@Injectable({
  providedIn: 'root',
})
export class regService {
  regs = [
    {
      id: 1,
      name: 'Tanja Koivunen',
      email: 'tanja@iki.fi',
      food: 'kala',
      saunailta: 'joo',
    },
  ];
  //valepalvelimen osoite, josta saadaan data
  dataurl = 'api/data';

  regsurl = 'api/regs';

  //liitetään eli injektoidaan HttpClient-olio tähän luokkaan konstruktorin argumenttina(Dependency injection)
  constructor(private http: HttpClient) {}

  // Tehdään palvelimelle pyyntö jolla haetaan data observablena

  getRegitration(): Observable<regService[]> {
    return this.http.get<regService[]>(this.regsurl);
    // virheenkäsittely voidaan tehdä tähän
  }
}
