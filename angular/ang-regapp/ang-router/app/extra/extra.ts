import { Component } from '@angular/core';

@Component({
selector: 'app-extra',
  template: `<h2 class="extra">ExtraComponent comes from own module</h2>`,
  styles: ['.extra {background: yellow}']
})
export class ExtraComponent { }
