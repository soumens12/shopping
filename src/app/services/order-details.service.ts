import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {


  constructor( private http:HttpClient) { }
  url = "https://dummyjson.com/products"
  ordersList()
  {
    return this.http.get(this.url);
  }
  
  
}
