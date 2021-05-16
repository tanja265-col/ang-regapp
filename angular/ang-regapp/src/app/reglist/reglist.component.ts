import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { registration } from '../data';
import { regService } from '../regs.service';

@Component({
  selector: 'app-reglist',
  templateUrl: './reglist.component.html',
  styleUrls: ['./reglist.component.css'],
})
export class ReglistComponent implements OnInit {
  regs: registration[]; //luodaan regs-muuttuja, jonka arvoksi annetaan registration[]-tyhjä oliotaulukko.

  //servicen käyttöön otto, reg.service.ts-tiedoston RegService-luokka
  constructor(private regservice: regService) {}

  // hakee tiedot servisestä tähän komponenttiin
  // eli servicen getregs tilaa (subscribe) observable, josta tieto saadaan ulos callbacilla.
  getregs(): void {
    // kutsutaan regservicen metodia, tilataan observablelta taulukko
    this.regservice.getregs().subscribe((regs) => (this.regs = regs));
  }
  // tämä on metodi joka suoritettaan automaattisesti aina kun
  // komponentti syntyy
  ngOnInit(): void {
    this.getregs();
  }
  add(f: any): void {
    this.regservice.addRegistration({}).subscribe((formData) => {
      this.regs.push(f);
    });
  }
}
