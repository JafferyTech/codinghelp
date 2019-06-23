import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Component} from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { OrderserviceService } from './orderservice.service';
import { InsertOrderComponent } from './insert-order/insert-order.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './filter.pipe';

import { CartOrdersComponent } from './cart-orders/cart-orders.component';
import { AboutComponent } from './Templateimport/about/about.component';
import { ContactComponent } from './Templateimport/contact/contact.component';
import { NavbarComponent } from './Templateimport/navbar/navbar.component';


import { AgmCoreModule } from '@agm/core';



@NgModule({
  
  declarations: [
    AppComponent,
    OrderlistComponent,
    InsertOrderComponent,
    UpdateOrderComponent,
    LoginComponent,
    FilterPipe,
   
   CartOrdersComponent,
   
   AboutComponent,
   
   ContactComponent,
   
   NavbarComponent,
  
   
  
  ],
  imports: [
     [AgmCoreModule.forRoot()],
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [OrderserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
