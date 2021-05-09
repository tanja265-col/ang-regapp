import { Component } from '@angular/core';
// tämän avulla voidaan ottaa vastaan parametreja reittiin
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-other',
  template: '<h2 class="other">OtherComponent. Route parameter is id {{otherID}}.</h2>',
  styles: ['.other {background: cyan}']
})
export class OtherComponent {
  otherID: string;

  constructor(private route: ActivatedRoute) {

    this.otherID = route.snapshot.params['id'];
  }
}
