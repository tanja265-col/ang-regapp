/*
Reitityksen vaatimat 'palikat' importataan moduuliin
Reititysstrategia tulee provideriin. Huomaa että tässä käytetään
tavallisesta poikkeavaa HashLocationStrategya. Normaalisti käytetään
oletusstrategiaa jolloin ei tarvitse tehdä moduuliin mitään muutoksia.
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home';
import {OtherComponent} from './other';
import {ErrorComponent} from './error';
// HashLocationStrategy vaatii tämän importtauksen
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { ExtraModule } from './extra.module';
/* 
ExralazyModulea ei laiteta imports-taulukkoon, vaan se importataan vasta kun sen linkkiä klikataan.
Se on lazy (laiska) moduuli jota ei ladata etukäteen muistiin vaan ainoastaan tarvittaessa.
Kaikki sen sisältämät osat, kuten komponentit, latautuvat myös vain tarvittaessa.
*/
@NgModule({
  imports: [BrowserModule, ExtraModule, AppRoutingModule],
  declarations: [AppComponent, HomeComponent, OtherComponent, ErrorComponent],
  // HashLocationStrategy otetaan käyttöön providerissa
  // Jos laitat seuraavan rivin kommenttiin, käytetään oletusreititysstrategiaa
  /*{ provide: LocationStrategy, useClass: HashLocationStrategy }*/
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
