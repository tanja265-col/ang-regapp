i;
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { registration } from '../data';
import { regService } from '../regs.service';

@Component({
  selector: 'app-reglist',
  templateUrl: './reglist.component.html',
  styleUrls: ['./reglist.component.css'],
})
export class ReglistComponent implements OnInit {
  regs: Regs[];

  //servicen käyttöön otto
  constructor(private regservice: RegService) {}

  // hakee tiedot servisestä tähän komponenttiin
  getregs(): void {
    this.regservice.getregs().subscribe((regs) => (this.regs = regs()));
  }
  // tämä on metodi joka suoritettaan automaattisesti aina kun
  // komponentti syntyy
  ngOnInit(): void {
    this.getregs();
  }
}

/*
import { Component, OnInit } from '@angular/core';
import { Study } from '../dataclasses';
import { HomepageService } from '../homepage.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css'],
})
export class StudiesComponent implements OnInit {
  mystudies: Study[];

  constructor(private hpservice: HomepageService) {}

  getStudy(): void {
    this.hpservice
      .getStudy()
      .subscribe((mystudies) => (this.mystudies = mystudies));
  }

  ngOnInit(): void {
    this.getStudy();
  }
}
*/
