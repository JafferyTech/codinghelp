import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {forbiddenNameValidator} from '../shared/validator';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import {OrderserviceService} from '../orderservice.service';
import {orders} from '../orders';
//import {} from '@angular/forms';
@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {
private submitted=false;
private editOrder:FormGroup;
private orderid:number;
private selectedorder;
private enteredorder=[];

  constructor(private frombuilder:FormBuilder,private router:Router,
    private route:ActivatedRoute,private service:OrderserviceService) { }

  ngOnInit() {
this.editOrder=this.frombuilder.group(
  {order_MENU:[''],
  order_AMOUNT:[''],
  address:[''],
  order_ID:['']

}
)
this.getControl("order_MENU");
this.route.paramMap.subscribe((params:ParamMap)=>{
  this.orderid=parseInt(params.get('id'))
});
this.service.getSingleOrder(this.orderid).subscribe(data=>{
  this.selectedorder=data;
  console.log(this.selectedorder);
  this.populateForm();
})
    
  }
  populateForm(){
    console.log(this.selectedorder);
    this.editOrder.setValue({
      order_MENU:[this.selectedorder.order_MENU],
      order_AMOUNT:[this.selectedorder.order_AMOUNT],
      address:[this.selectedorder.address],
      order_ID:[this.selectedorder.order_ID]
    })
  }
  
  getControl(value){
return this.editOrder.get(value);
  }

  onSubmit(){
    console.log(this.editOrder);
    var object={
      order_MENU:this.getControl('order_MENU').value,
      order_AMOUNT:this.editOrder.value.order_AMOUNT[0],
      address:this.editOrder.value.address[0]
    }
    this.service.updateOrder(object,this.orderid)
    .subscribe(data=>{
      console.log(data);
      this.submitted=true;
    }),
    error=>alert(error);
    console.log(object);
    
  }
}
