import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {OrderserviceService} from '../orderservice.service'
import {forbiddenNameValidator} from '../shared/validator';

@Component({
  selector: 'app-insert-order',
  templateUrl: './insert-order.component.html',
  styleUrls: ['./insert-order.component.css']
})
export class InsertOrderComponent implements OnInit {
  insertOrder:FormGroup;
  orderMenu=[];
  hasError=true;
  subitted=false;


  constructor(private formbuilder:FormBuilder,private servcie:OrderserviceService) { }

  ngOnInit() {
    this.insertOrder=this.formbuilder.group({
      order_Menu:[''],
      order_Amount:[''],
      address:[''],
      order_id:['default']
    });
    this.getorderMenu();
    
    
  }

  onSubmit(){
    console.log(this.insertOrder.value);
    this.servcie.insertOrder(this.insertOrder.value)
      .subscribe(data=>console.log(data),
                          error=>console.log(error));
                          this.subitted=true;  
  }
  getorderMenu(){
    this.servcie.getOrdersList().subscribe(data=>this.orderMenu=data);
  }
ValidateType(value){
  if(value=='default')
  this.hasError=true;
  else
    this.hasError=false
}
get order_id(){
  return this.insertOrder.get('order_id');

}
get order_Amount(){
return this.insertOrder.get('order_Amount');
}
get address(){
  return this.insertOrder.get('address');
}
}
