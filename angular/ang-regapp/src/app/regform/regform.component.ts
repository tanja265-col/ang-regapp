import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { registration } from '../data';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css'],
})
export class RegformComponent implements OnInit {
  router: any;
  formData: any;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(formData) {
    console.log(formData);
  }

  navigateToList() {
    this.router.navigate(['/reglist']);
  }
}
