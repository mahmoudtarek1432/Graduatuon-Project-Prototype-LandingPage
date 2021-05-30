import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../Models/Category';
import { MenuItem, postMenuItem } from '../Models/MenuItems';
import { Order } from '../Models/Order';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories():Observable<Category[]>{
    var headers =new HttpHeaders({
      'Access-Control-Allow-Credentials': 'true',
      'withCredentials': 'true'
    })
    return this.http.get<Category[]>("http://172.20.10.2:84/api/Items/GetItems",{headers:headers,withCredentials:false});
  }

  CreateItem(Item:postMenuItem):Observable<any>{
    var headers =new HttpHeaders({
      'Access-Control-Allow-Credentials': 'true',
      'withCredentials': 'true'
    })
    return this.http.post<any>("http://172.20.10.2:84/api/Items/CreateItem",Item,{headers:headers,withCredentials: false})
  }

  deleteItem(Id:any):Observable<any>{
    var headers =new HttpHeaders({
      'Access-Control-Allow-Credentials': 'true',
      'withCredentials': 'true'
    })
    return this.http.delete<any>("http://172.20.10.2:84/api/Items/DeleteItem/"+Id,{headers:headers,withCredentials: false})
  }

  updateItem(item:MenuItem):Observable<any>{
    return this.http.put<any>("http://172.20.10.2:84/api/Items/UpdateItem",item,{withCredentials:false})
  }

  getOrders():Observable<Order[]>{
    return this.http.get<Order[]>("http://172.20.10.2:84/api/Order",{withCredentials:false})
  }

  DeleteOrder(orderId:number):Observable<any>{
    return this.http.delete<any>("http://172.20.10.2:84/api/Order/"+orderId,{withCredentials:false})
  }
}
