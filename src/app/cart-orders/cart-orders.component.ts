import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-cart-orders',
  templateUrl: './cart-orders.component.html',
  styleUrls: ['./cart-orders.component.css']
})
export class CartOrdersComponent implements OnInit {
count=0
  constructor(private router:Router) { }
 

  ngOnInit() {
    
    
  }
  gotoMap(){
    this.router.navigate(['/map'])
  }
gotoLogin(){
  this.router.navigate(['/Login'])
}
CartSave(){
this.count++;
}
}
