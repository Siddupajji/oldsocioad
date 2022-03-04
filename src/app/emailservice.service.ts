import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailserviceService {

  constructor(private http: HttpClient) { }
  private headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*')
  mypostemailrequrest(url:string, formcontent:any){
    return this.http.post(url, formcontent, {'headers': this.headers})
  }
}
