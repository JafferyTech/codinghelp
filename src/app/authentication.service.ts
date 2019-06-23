import { Injectable } from '@angular/core';
import {FormsModule} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

authenticate(username,password){
  if(username=="Admin"&&password=="password"){
    sessionStorage.setItem('username',username)
    return true;
  }
  else{
    return false
  }
}
isUserLoggedIn(){
  let user=sessionStorage.getItem('useranme')
  console.log!(user==null)
  return !(user==null)
}
logOut(){
sessionStorage.removeItem('username')
}
}
