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
    console.log(JSON.parse(JSON.stringify(json)));
    const path = `${this.api}login`;
    return this.http.post(path, "'" + JSON.stringify(json) + "'", httpOptions);
  }

  /**
   * Sign Up Admin
   * @param json '{full_name: XX, email: XX@XX, phone_number: XX, username: XX, password: XX}'
   */
  signUpAdmin(json: any) {
    console.log(JSON.parse(JSON.stringify(json)));
    const path = `${this.api}signup`;
    return this.http.post(path, "'" + JSON.stringify(json) + "'", httpOptions);
  }
  /**
   * Set the Role of a Admin
   * @param username Username of Admin
   * @param json '{"roles":["A", "B"]}'
   */
  adminSetRole(username: string, json: any) {
    console.log(JSON.parse(JSON.stringify(json)));
    const path = `${this.api}signup/${username}/roles`;
    return this.http.post(path, "'" + JSON.stringify(json) + "'", httpOptions);
  }

  /**
   * createSuitcase
   * @param json '{"username":"XXXX", "weight":"XX.XX", "color": "XXXX"}'
   */
  createSuitcase(json: any) {
    console.log(JSON.parse(JSON.stringify(json)));
    const path = `${this.api}baggage/create`;
    return this.http.post(path, "'" + JSON.stringify(json) + "'", httpOptions);
  }

  /**
   * createBagCart
   * @param json '{"brand":"XXX", "model": XXXX, "capacity": XXX}'
   */
  createBagCart(json: any) {
    console.log(JSON.parse(JSON.stringify(json)));
    const path = `${this.api}bagcart/create`;
    return this.http.post(path, "'" + JSON.stringify(json) + "'", httpOptions);
  }

  /**
   * addBrand
   * @param json '{"brand":"XXX"}' MAYBE
   */
  addBrand(json: any) {
    console.log(JSON.parse(JSON.stringify(json)));
    const path = `${this.api}bagcart/brands/new`;
    return this.http.post(path, "'" + JSON.stringify(json) + "'", httpOptions);
  }

  /**
   * Create Flight
   * @param json '{model:XX}'
   */
  createFlight(json: any) {
    console.log(JSON.parse(JSON.stringify(json)));
    const path = `${this.api}flights/new`;
    return this.http.post(path, "'" + JSON.stringify(json) + "'", httpOptions);
  }

  /**
   * Assign Bagcart To Flight
   * @param json {"flight_id": X, "bg_brand": XXXX}
   */
  assignBagcartToFlight(json: any) {
    console.log(JSON.parse(JSON.stringify(json)));
    const path = `${this.api}flights/bagcart/assign`;
    return this.http.post(path, "'" + JSON.stringify(json) + "'", httpOptions);
  }

  
  /**
   * Assign Plane To Flight
   * @param json {"flight_id": X, "plane": XXXX} MAYBE
   */
  assignPlaneToFlight(json: any) {
    console.log(JSON.parse(JSON.stringify(json)));
    const path = `${this.api}flights/bagcart/assign`;
    return this.http.post(path, "'" + JSON.stringify(json) + "'", httpOptions);
  }

  /**
   * Assign Bag To Section
   * @param json '{"flight_id": X, "section_id": X, "suitcase_id": X, "user_id": X}'
   */
  assignBagToSection(json: any) {
    console.log(JSON.parse(JSON.stringify(json)));
    const path = `${this.api}section/assign`;
    return this.http.post(path, "'" + JSON.stringify(json) + "'", httpOptions);
  }
  // ------GET------ // 

  /**
   * Get all Roles
   */
  getRoles() {
    const path = `${this.api}roles`;
    console.log(path);
    return this.http.get(path);
  }

  /**
   * Get all Colors
   */
  getColors() {
    const path = `${this.api}colors`;
    console.log(path);
    return this.http.get(path);
  }
 
  /**
   * Get all Brands
   */
  getBrands() {
    const path = `${this.api}bagcart/brands`;
    console.log(path);
    return this.http.get(path);
  }

  /**
   * Get all Models
   */
  getModels() {
    const path = `${this.api}bagcart/models`;
    console.log(path);
    return this.http.get(path);
  }

  /**
   * Get all Flights
   */
  getFlights() {
    const path = `${this.api}flights`;
    console.log(path);
    return this.http.get(path);
  }

  /**
   * Get all Planes
   */
  getPlanes() {
    const path = `${this.api}planes`;
    console.log(path);
    return this.http.get(path);
  }

  /**
   * Close a BagCart by the Flight ID
   * @param flightID Id of Flight to close
   */
  closeBagCart(flightID: string) {
    const path = `${this.api}bagcart/${flightID}/close`;
    console.log(path);
    return this.http.get(path);
  }

  /**
   * get sections of a flight
   * @param flightID Id of Flight to get seccion
   */
  GetFlightSections (flightID: string) {
    const path = `${this.api}${flightID}/sections`;
    console.log(path);
    return this.http.get(path);
  }

}
