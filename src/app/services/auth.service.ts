import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = '';
  constructor(private http: HttpClient) {}

  public getUsers(user: any) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("Ind",1);
    queryParams = queryParams.append("OrgID",1003);
    queryParams = queryParams.append("UserName",user.username);
    queryParams = queryParams.append("LoginKey",user.password);

    this.url = "http://52.172.217.244//SafaikaramchariWebApi/api/Login/WebLogin?Ind=1&OrgID=1003&UserName=" + user.username + "&LoginKey=" + user.password
    return this.http.get("http://52.172.217.244//SafaikaramchariWebApi/api/Login/WebLogin", {params: queryParams})

  }
}