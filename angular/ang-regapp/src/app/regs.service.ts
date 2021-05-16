import { Injectable } from '@angular/core';

//HttpClient tarvitaan datan lähettämiseen palvelimelle ja sen hakemiseen palvelimelta
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Palvelimelta tuleva data toimitetaan komponentille Observablena eli reaktiivisesti.
import { Observable, of } from 'rxjs';

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
      sauna: 'joo',
    },
  ];
  //valepalvelimen osoite, josta saadaan data
  dataurl = 'api/data'; //URL to web api
  // vaihda tähän oikea palvelimen osoite, sitten kun siirrytään käyttämään sitä
  private regsurl = 'api/regs'; //luokan ominaisuuksiin

  // määrittelee verkon yli kulkevan datan JSON-muotoiseksi
  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' }),
  };

  //liitetään eli injektoidaan HttpClient-olio tähän luokkaan konstruktorin argumenttina(Dependency injection)
  // http-olion avulla tehdään pyyntöjä serverille
  constructor(private http: HttpClient) {}
  // tällä metodilla  rekistöitymiset serviceen: getRegistration(): any[]{return og(registration)};
  // Tehdään palvelimelle pyyntö jolla haetaan data observablena
  // getRegistration palauttaa Observable jossa on taulukko joka sisältää any-tyyppisiä olioita
  // http-pyynnöt sisältävät metodin jolla pyyntö tehdään
  getregs(): Observable<any[]> {
    return this.http.get<any[]>(this.regsurl);

    // virheenkäsittely voidaan tehdä tähän
  }
  addRegistration(f: any): Observable<registration[]> {
    return this.http.post<registration[]>(
      this.regsurl,
      registration,
      this.httpOptions
    );
  }
}
