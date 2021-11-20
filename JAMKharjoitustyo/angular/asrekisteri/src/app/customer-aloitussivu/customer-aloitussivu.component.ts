import { sharedStylesheetJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerModel } from '../models/customer-aloitussivu.model';

@Component({
  selector: 'app-customer-aloitussivu',
  templateUrl: './customer-aloitussivu.component.html',
  styleUrls: ['./customer-aloitussivu.component.css'],
})
export class CustomerAloitussivuComponent implements OnInit {
  formValue!: FormGroup;
  //objekti
  customerModelObj: CustomerModel = new CustomerModel();
  customerData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  api!: any;

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    //lomakkeen kohdat
    this.formValue = this.formbuilder.group({
      name: [''],
      email: [''],
      address: [''],
      info: [''],
      active: [''],
    });
  }

  // kun klikataan näyttää painikkeen lisää tai muokkaa
  clickAddCustomer() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  //asiakkaan tietojen vienti
  postCustomerDetails() {
    this.customerModelObj.name = this.formValue.value.name;
    this.customerModelObj.email = this.formValue.value.email;
    this.customerModelObj.address = this.formValue.value.address;
    this.customerModelObj.info = this.formValue.value.info;
    this.customerModelObj.active = this.formValue.value.active;

    this.api.postCustomer(this.customerModelObj).subscribe(
      (res: any) => {
        console.log(res);
        alert('Customer added successfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllCustomers();
      },
      (err: any) => {
        alert('Something went wrong');
      }
    );
  }
  //asikkaiden haku
  getAllCustomers() {
    this.api.getCustomer().subscribe((res: any) => {
      this.customerData = res;
    });
  }
  //asiakkaan poisto
  deleteCustomer(row: any) {
    this.api.deleteCustomer(row.id).subscribe((res: any) => {
      alert('Customer deleted');
      this.getAllCustomers();
    });
  }
  //asikkaan tietojen muokkaus
  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.customerModelObj.id = row.id;
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['address'].setValue(row.address);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['info'].setValue(row.info);
    this.formValue.controls['active'].setValue(row.active);
  }

  updateCustomerDetails() {
    this.customerModelObj.name = this.formValue.value.name;
    this.customerModelObj.email = this.formValue.value.email;
    this.customerModelObj.address = this.formValue.value.address;
    this.customerModelObj.info = this.formValue.value.info;
    this.customerModelObj.active = this.formValue.value.active;

    this.api
      .updateCustomer(this.customerModelObj, this.customerModelObj.id)
      .subscribe((res: any) => {
        alert('Updated succesfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllCustomers();
      });
  }
}
