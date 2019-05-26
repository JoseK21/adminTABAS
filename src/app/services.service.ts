import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private api = 'http://localhost:51208/tabas/';

  constructor(private http: HttpClient) { }


  /**
   * Log In Admin
   * @param json dataJson to transfer
   */
  logIn(json:any) {
    const path = `${this.api}login`;
    return this.http.post(path, "'" + JSON.stringify(json) + "'", httpOptions);
  }
  
  /**
   * Get all airports
   */
  getRoles() {
    const path = `${this.api}role`;
    return this.http.get(path);
  }


  signUpAdmin(json:any){
    const path = `${this.api}signup`;
    return this.http.post(path, "'" + JSON.stringify(json) + "'", httpOptions);
  }

  adminSetRole(username:string,json:any){
    const path = `${this.api}signup/${username}/roles`;
    return this.http.post(path, "'" + JSON.stringify(json) + "'", httpOptions);
  }
}
