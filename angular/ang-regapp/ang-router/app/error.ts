import {Component} from '@angular/core';

@Component({
    selector: 'app-error',
    template: '<h2 class="error">ErrorComponent. Dear friend, this URL was not found</h2>',
    styles: ['.error {background: red}']
})
export class ErrorComponent {}
