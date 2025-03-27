import { Component } from '@angular/core';
import Customer from '../../model/Customer';
import { HttpClient } from '@angular/common/http';
import { subscribeOn, Subscriber } from 'rxjs';

@Component({
  selector: 'app-manage-customer',
  imports: [],
  templateUrl: './manage-customer.component.html',
  styleUrl: './manage-customer.component.css'
})
export class ManageCustomerComponent {

  CustomerList:Customer[]=[];

  constructor(private http:HttpClient){
    new Customer(1,"senura",100000.00,"anamaduwa");
  }
  loardCustomer(){
    this.http.get<Customer[]>("http://localhost:8080/Customer/get-all").subscribe(res=>{
      this.CustomerList=res;
      console.log(res);
    })
  }
  
}
