import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { InsertOrderComponent } from './insert-order/insert-order.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';

import { CartOrdersComponent } from './cart-orders/cart-orders.component';
import { AboutComponent } from './Templateimport/about/about.component';

import { AgmCoreModule } from '@agm/core';


const routes: Routes = [
//{path:'',redirectTo:'/order-list',pathMatch:'full'},
{path:'order-list',component:OrderlistComponent},
{path:'insert-order',component:InsertOrderComponent},
{path:'update-order/:id',component:UpdateOrderComponent},
{path:'Login',component:LoginComponent},
{path:'cart',component:CartOrdersComponent},
{path:'map',component:AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
export const AppRoutingModules=[
OrderlistComponent,
InsertOrderComponent,
UpdateOrderComponent,
LoginComponent,
CartOrdersComponent,
AboutComponent
]

