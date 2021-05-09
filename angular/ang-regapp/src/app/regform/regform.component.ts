import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css'],
})
export class RegformComponent implements OnInit {
  router: any;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log();
  }

  navigateToList() {
    this.router.navigate(['/reglist']);
  }
}
