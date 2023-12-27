import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private ORDERS_URL = "http://localhost:8088/foodie-webservice/api/orders";

  constructor(private httpClient: HttpClient) { }

  /** Get Orders List */
    getAll(){
      return this.httpClient.get<any[]>(`${this.ORDERS_URL}`);
    }

  /** Get one Order */
  getOne(orderId:number){
      return this.httpClient.get<any[]>(`${this.ORDERS_URL}/${orderId}`);
  }

  /** Add Order */
  add(orderObj:any){
      return this.httpClient.post<any>(`${this.ORDERS_URL}`,orderObj);
  }

  /** Update Order */
  update(orderObj:any){
      return this.httpClient.put<any>(`${this.ORDERS_URL}`,orderObj);
  }

  /** Delete Order */
  delete(orderId:number){
      return this.httpClient.delete<any>(`${this.ORDERS_URL}/${orderId}`);
  }


}




  

