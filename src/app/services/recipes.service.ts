import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private RECIPES_URL = "http://localhost:8088/foodie-webservice/api/menus";

  constructor(private httpClient: HttpClient) { }


  /** Get Recipes List */
  //getAll(pagable:Pagable){
    getAll(){
      return this.httpClient.get<any[]>(`${this.RECIPES_URL}`);
    }

  /** Get one Recipes */
  getOne(recipeId:number){
      return this.httpClient.get<any[]>(`${this.RECIPES_URL}/${recipeId}`);
  }

  /** Add Restaurants */
  add(recipeObj:any){
      return this.httpClient.post<any>(`${this.RECIPES_URL}`,recipeObj);
  }

  /** Update Restaurants */
  update(recipeObj:any){
      return this.httpClient.put<any>(`${this.RECIPES_URL}`,recipeObj);
  }

  /** Delete Restaurants */
  delete(recipeId:number){
      return this.httpClient.delete<any>(`${this.RECIPES_URL}/${recipeId}`);
  }
}
