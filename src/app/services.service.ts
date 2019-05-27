import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private api = 'http://localhost:51208/tabas/';

  constructor(private http: HttpClient) { }

  // ------POST------ //  

  /**
   * Log In Admin
   * @param json '{"username": "XXXX", "password": "XXXX"}'
   */
  logIn(json: any) {
    const path = `${this.api}login`;
    return this.http.post(path, "'" + JSON.stringify(json) + "'", httpOptions);
  }

  /**
   * Sign Up Admin
   * @param json '{full_name: XX, email: XX@XX, phone_number: XX, username: XX, password: XX}'
   */
  signUpAdmin(json: any) {
    const path = `${this.api}signup`;
    return this.http.post(path, "'" + JSON.stringify(json) + "'", httpOptions);
  }
  /**
   * Set the Role of a Admin
   * @param username Username of Admin
   * @param json '{"roles":["A", "B"]}'
   */
  adminSetRole(username: string, json: any) {
    const path = `${this.api}signup/${username}/roles`;
    return this.http.post(path, "'" + JSON.stringify(json) + "'", httpOptions);
  }

  /**
   * createSuitcase
   * @param json '{"username":"XXXX", "weight":"XX.XX", "color": "XXXX"}'
   */
  createSuitcase(json: any) {
    const path = `${this.api}baggage/create`;
    return this.http.post(path, "'" + JSON.stringify(json) + "'", httpOptions);
  }

  /**
   * createBagCart
   * @param json '{"brand":"XXX", "model": XXXX}'
   */
  createBagCart(json: any) {
    const path = `${this.api}bagcart/create`;
    return this.http.post(path, "'" + JSON.stringify(json) + "'", httpOptions);
  }

  /**
   * createBagCart
   * @param json '{"brand":"XXX", "model": XXXX}'
   */
  addBrand(json: any) {
    const path = `${this.api}bagcart/brands/new`;
    return this.http.post(path, "'" + JSON.stringify(json) + "'", httpOptions);
  }


  // ------GET------ // 

  /**
   * Get all Roles
   */
  getRoles() {
    const path = `${this.api}role`;
    return this.http.get(path);
  }

  /**
   * Get all Colors
   */
  getColors(){
    const path = `${this.api}colors`;
    return this.http.get(path);
  }

  /**
   * Get all Brands
   */
  getBrands(){
    const path = `${this.api}bagcart/brands`;
    return this.http.get(path);
  }

  /**
   * Get all Models
   */
  getModels(){
    const path = `${this.api}bagcart/models`;
    return this.http.get(path);
  }

}
