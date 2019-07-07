import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './dashboard/home/home.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { EmplistComponent } from './dashboard/emplist/emplist.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { AddnewComponent } from './dashboard/addnew/addnew.component';
import {APP_BASE_HREF} from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    EmplistComponent,
    ContactComponent,
    AddnewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
