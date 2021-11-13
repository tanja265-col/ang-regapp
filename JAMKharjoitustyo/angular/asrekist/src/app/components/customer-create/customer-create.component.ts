import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css'],
})
export class CustomerCreateComponent implements OnInit {
  customer = {
    name: '',
    address: '',
    email: '',
    info: '',
    active: false,
  };
  submitted = false;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {}

  createCustomer(): void {
    const data = {
      name: this.customer.name,
      address: this.customer.address,
      email: this.customer.email,
      info: this.customer.info,
      active: this.customer.active,
    };

    this.customerService
      .create(data)
      .subscribe((data) => (this.customer = data));
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = {
      name: '',
      address: '',
      email: '',
      info: '',
      active: false,
    };
  }
}
