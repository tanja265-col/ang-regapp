import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent implements OnInit {
  currentcustomer: Customer = {
    id: '',
    email: '',
    name: '',
    address: '',
    info: '',
    active: '',
  };

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCustomer(this.route.snapshot.paramMap.get('id'));
  }

  getCustomer(id: any): void {
    this.customerService
      .read(id)
      .subscribe((customer) => (this.currentcustomer = customer));
  }

  setActiveStatus(status: any): void {
    const data = {
      name: this.currentcustomer.name,
      address: this.currentcustomer.address,
      email: this.currentcustomer.email,
      info: this.currentcustomer.info,
      active: status,
    };
    this.customerService
      .update(this.currentcustomer.id, data)
      .subscribe((customer) => (this.currentcustomer = customer));
  }

  updateCustomer(id: any, data: any): void {
    this.customerService
      .update(id, data)
      .subscribe((customer) => (this.currentcustomer = customer));
  }

  deleteCustomer(id: any): void {
    this.customerService
      .delete(id)
      .subscribe((customer) => (this.currentcustomer = customer));
  }
}
