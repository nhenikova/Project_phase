import { Component } from '@angular/core';

import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent{
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();

  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer(); //cleart the UI
  }
}
