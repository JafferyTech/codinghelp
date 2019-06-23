import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import { invalid } from '@angular/compiler/src/render3/view/util';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username='Admin'
password=''
invalidLogin=false
  constructor(private loginservcie:AuthenticationService,private router:Router) { }

  ngOnInit() {
  }

  checkLogin(){
    if(this.loginservcie.authenticate(this.username,this.password)){
      this.router.navigate(['/cart'])
      this.invalidLogin=false
    }else{
      this.invalidLogin=true
    }
  }
}
