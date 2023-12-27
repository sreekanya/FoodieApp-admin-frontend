import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  private AUTH_URL ="login";

  loginAdmin(adminObj:any) {
    return this.httpClient.post<any[]>(`${environment.apiBaseUrl}/admins/login`, adminObj);
  }

  registerAdmin(userObj:any) {
    return this.httpClient.post<any[]>(`${environment.apiBaseUrl}/admins`, userObj);
  }
  

  isLoggedIn():boolean {
    let authToken = localStorage.getItem('x-auth-token');
    let adminId = localStorage.getItem('x-admin-id');
    let fullName = localStorage.getItem('x-admin-name');
    return !(!authToken && !adminId && !fullName);
  }

  getfullName() {
    return localStorage.getItem('x-admin-name');
  }

  getAuthToken() {
    return localStorage.getItem('x-auth-token') ;
  }

  logOut() {
    localStorage.clear();
  }
}