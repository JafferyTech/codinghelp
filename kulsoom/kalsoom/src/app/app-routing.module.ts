import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { EmplistComponent } from './dashboard/emplist/emplist.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { AddnewComponent } from './dashboard/addnew/addnew.component';

const routes: Routes = [
  
{path :'home ', component:HomeComponent},
{path :'addnew',component:AddnewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
