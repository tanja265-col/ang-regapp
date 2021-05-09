import { Component } from '@angular/core';
import { Router } from '@angular/router'; // tarvitaan navigate() -metodin kanssa
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // Seuraavat rivit tarvitaan jos käytetään navigate() -metodia nappia klikkaamalla
  constructor(private _router: Router) { }
  
  navigateToOther() {
    this._router.navigate(['/other/1234']);
  }

}
