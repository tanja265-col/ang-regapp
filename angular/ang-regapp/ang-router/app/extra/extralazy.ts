import { Component } from '@angular/core';

@Component({
selector: 'app-extralazy',
  template: `<h2 class="extralazy">ExtralazyComponent comes from own module and is loaded only when needed</h2>`,
  styles: ['.extralazy {background: Orange}']
})
export class ExtralazyComponent { }
