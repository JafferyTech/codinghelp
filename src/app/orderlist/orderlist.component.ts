import { Component, OnInit } from '@angular/core';
import {OrderserviceService} from '../orderservice.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
private OrderList=[];
  constructor(
  private service:OrderserviceService,
  private router:Router,
  private route:ActivatedRoute

  ) { }

  ngOnInit() {
this.service.getOrdersList().subscribe(
  data=>{
    this.OrderList=data;
    console.log(this.OrderList);
    
  },
  error=>alert(error)
);

  }
  onClick(value){
    alert('I am clicked'+value)
    this.router.navigate([{relativeTo:this.route},'edit-order'],value)
  }
  deleteOrder(amount,menu){
    console.log(amount);
    if(confirm("Are you sure you want to delete this order "+name+"? ")){
      this.service.deleteOrder(amount).subscribe(data=>console.log(data),error=>console.error(error));
    }
    this.router.navigate(['order-list']);
  }
}
