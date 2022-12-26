import { Component } from '@angular/core';
import { FormControl, FormGroup,AbstractControl,FormArray, Validators} from '@angular/forms';
import { Customer } from '../model/customer.model';
import { CustomerSevice } from '../service/customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
 customer:Customer=new Customer();
  message:any;
  dummy:any;
  vd:any;
 constructor(private customerService:CustomerSevice){}


    registerForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    userName: new FormControl('',[Validators.required,Validators.minLength(6)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    address: new FormControl('',Validators.required),
    address2: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
    pin: new FormControl('',Validators.required),

  });
  onSubmit(){
    console.log(this.registerForm);
   this.customer.firstName=this.registerForm.value.firstName;
    this.customer.lastName=this.registerForm.value.lastName;
    this.customer.userName=this.registerForm.value.userName;
    this.customer.email=this.registerForm.value.email;
    this.customer.address=this.registerForm.value.address;
    this.customer.address2=this.registerForm.value.address2;
   this.customer.city=this.registerForm.value.city ;
    this.customer.state=this.registerForm.value.state;
    this.customer.pin=this.registerForm.value.pin;

    alert('submitted');
    this.validateAdd();
   this.validateCreditScore();
   this.createNewAccount();
   // this.registerForm.reset();
  }


  validateAdd(){
    this.customerService.validateAddress(this.customer.pin).subscribe((responseData: any)=>{
      this.vd=responseData;
      console.log(responseData);
    });
  }
  validateCreditScore(){
    this.customerService.validateHistroyCredit(this.customer.userName).subscribe((responseData)=>{
      this.dummy=responseData;
      console.log(responseData);
     });
  }
createNewAccount(){
  //console.log(this.customer);
  this.customerService.createAccount(this.customer).subscribe((responseData)=>{
    this.message=responseData;
    alert("successfully new account submitted the form")
    console.log(responseData);
  } );

  //  ResultData=>{
    //alert("successfully account created")
  //}, error=>alert("Sorry user not registser")); 
}

get add(){
  return this.registerForm.get('address');
}

get add2(){
  return this.registerForm.get('address2');
}

}
