import { Injectable } from '@angular/core';
import {Observable,throwError} from 'rxjs';
import {HttpClient,HttpErrorResponse, HttpHeaderResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {orders} from './orders';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {


 // headers=new HttpHeaderResponse({'Access-control-Allow-Origin':'*'})
 path:string="http://localhost:8080/api";
 
 constructor(private http:HttpClient) { }

 getOrdersList():Observable<any[]>{
   return this.http.get<any[]>(this.path);

 }

 getOrderbyID(id:number){
   let concated='/'+id;
   return this.http.get<any>(this.path.concat(concated));
 }

 insertOrder(data){
   return this.http.post(this.path,data).pipe(catchError(this.errorHandler));
 }
errorHandler(error:HttpErrorResponse){
return throwError(error);
}

updateOrder(data,id){
  this.path=this.path+'/'+id;
  return this.http.put(this.path,data)
  .pipe(catchError(this.errorHandler));
}

deleteOrder(id:number){
  this.path=this.path+'/'+id;
  return this.http.delete(this.path).pipe(catchError(this.errorHandler));
}
getSingleOrder(id:number):Observable<any>{
  return this.http.get<any>(this.path+'/'+id);

}

Search(quereyString:string){
  let _URL=this.path+quereyString;
  return this.http.get(_URL);
}
}
