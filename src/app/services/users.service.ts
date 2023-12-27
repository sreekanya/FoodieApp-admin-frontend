import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private USERS_URL = "http://localhost:8088/foodie-webservice/api/users";

  constructor(private httpClient: HttpClient) { }


  /** Get Users List */
  //getAll(pagable:Pagable){
    getAll(){
      return this.httpClient.get<any[]>(`${this.USERS_URL}`);
    }

  /** Get one User */
  getOne(userId:number){
      return this.httpClient.get<any[]>(`${this.USERS_URL}/${userId}`);
  }

  /** Add User */
  add(userObj:any){
      return this.httpClient.post<any>(`${this.USERS_URL}`,userObj);
  }

  /** Update User */
  update(userObj:any){
      return this.httpClient.put<any>(`${this.USERS_URL}`,userObj);
  }

  /** Delete User */
  delete(userId:number){
      return this.httpClient.delete<any>(`${this.USERS_URL}/${userId}`);
  }
}
