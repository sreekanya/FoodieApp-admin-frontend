import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  private RESTAURANTS_URL = "http://localhost:8088/foodie-webservice/api/restaurants";

  constructor(private httpClient: HttpClient) { }


  /** Get Restaurants List */
  //getAll(pagable:Pagable){
    getAll(){
      return this.httpClient.get<any[]>(`${this.RESTAURANTS_URL}`);
    }

  /** Get one Restaurants */
  getOne(restaurantId:number){
      return this.httpClient.get<any[]>(`${this.RESTAURANTS_URL}/${restaurantId}`);
  }

  /** Add Restaurants */
  add(restaurantObj:any){
      return this.httpClient.post<any>(`${this.RESTAURANTS_URL}`,restaurantObj);
  }

  /** Update Restaurants */
  update(restaurantObj:any){
      return this.httpClient.put<any>(`${this.RESTAURANTS_URL}`,restaurantObj);
  }

  /** Delete Restaurants */
  delete(restaurantId:number){
      return this.httpClient.delete<any>(`${this.RESTAURANTS_URL}/${restaurantId}`);
  }
}

