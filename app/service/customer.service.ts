import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Customer } from "../model/customer.model";
import { Observable } from "rxjs";
import { state } from "@angular/animations";


@Injectable({
    providedIn:'root'
})
export class CustomerSevice{
  userName: string;

constructor(private http:HttpClient) {}
    

private baseUrl:string='http://localhost:8081';


  validateAddress(pin: string): Observable<Object>{
    // send get  request/address
   // console.log("validating the address  service call:"+JSON.stringify(Customer));
    console.log("pin value is coming here:-- >"+JSON.stringify(pin));
  return this.http.get('http://localhost:8081/address/'+pin,{responseType:'text' as 'json'});
  }

  validateHistroyCredit(userName:string): Observable<Object>{
    //send get request
    //console.log("validating the historyScore customer service call:"+Customer);
    console.log("user name value is coming here:-- >"+JSON.stringify(userName));
        return this.http.get('http://localhost:8081/creditcheck/'+userName);
  }

  createAccount(customer: Customer): Observable<Object>{
    //send the post request
   // console.log("the create customer service call:"+JSON.stringify(customer));
 return  this.http.post<Customer>('http://localhost:8081/accounts',customer,{responseType:'text' as 'json'});
  }



}