import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetEmpListService {

  constructor(private http: HttpClient) { }

  public getEmpList(data:any){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("Ind",2);
    queryParams = queryParams.append("OrgID",1003);
    queryParams = queryParams.append("CircleNo",data.circleNo);
    queryParams = queryParams.append("WardNo",data.wardNo);
    queryParams = queryParams.append("ShiftID",data.shiftID);
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'}),
    };

    return this.http.post("http://52.172.217.244//SafaikaramchariWebApi/api/Login/EmpList?", queryParams.toString(), httpOptions)
  }
}
