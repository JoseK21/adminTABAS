import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class BagCartService {

  private api = 'https://tabas-api.azurewebsites.net/tabas/';
  constructor(private http: HttpClient) { }


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
   * Get all Brands
   */
  getBrands() {
    const path = `${this.api}bagcart/brands`;
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
   * Get all BagCart
   */
  getBagCarts() {
    const path = `${this.api}bagcarts`;
    console.log(path);
    return this.http.get(path);
  }


  /**
   * Get all BagCarts IDs
   */
  getBagCartsIDBrands() {
    const path = `${this.api}bagcarts`;
    console.log(path);
    return this.http.get(path);
  }







}
