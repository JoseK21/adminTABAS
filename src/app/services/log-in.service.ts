import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable({
  providedIn: 'root'
})
export class LogInService {

  private api = 'http://localhost:51208/tabas/';

  constructor(private http: HttpClient) { }


  /**
   * Log In Admin
   * @param json '{"username": "XXXX", "password": "XXXX", "role": "XXXXX"}'
   */
  logIn(json: any) {
    console.log(JSON.parse(JSON.stringify(json)));
    const path = `${this.api}login`;
    return this.http.post(path, "'" + JSON.stringify(json) + "'", httpOptions);
  }



}
