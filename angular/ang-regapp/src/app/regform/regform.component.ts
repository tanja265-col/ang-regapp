import { Component, OnInit, Testability } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { registration } from '../data';
import { regService } from '../regs.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css'],
})
export class RegformComponent implements OnInit {
  formData: any;
  registration: any;
  regs: any;
  value: any;

  constructor(private regService: regService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    //console.log(f.value);
    this.regService.addRegistration(f).subscribe(
      (data) => console.log('Ilmoittautuminen onnistui', data),
      (error) => console.error('Ilmoittautuminen epäonnistui', error)
    );
  }

  navigateToList() {
    this.router.navigate(['/reglist']);
  }
}
