import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers: any;
  currentCustomer = null;
  currentIndex = -1;
  name = '';
  id = '';

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers(): void {
    this.customerService.getAll().subscribe((data) => (this.customers = data));
  }
  refresh(): void {
    this.getCustomers();
    this.currentCustomer = null;
    this.currentIndex = -1;
  }

  setCurrentCustomer(customer: any, index: any): void {
    this.currentCustomer = customer;
    this.currentIndex = index;
  }

  deleteAllCustomers(): void {
    this.customerService
      .deleteAll()
      .subscribe((data) => (this.customers = data));
  }

  searchByName(): void {
    this.customerService
      .searchByName(this.name)
      .subscribe((data) => (this.customers = data));
  }
}
