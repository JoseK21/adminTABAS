import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class DeleteServiceService {

  private api = 'https://tabas-api.azurewebsites.net/tabas/';

  constructor(private http: HttpClient) { }

  /**
   * Delete Airplane
   * @param airplane 
   */
  deleteAirplane(airplane: string) {
    const path = `${this.api}delete/airplane/${airplane}`;
    return this.http.post(path, "", httpOptions);
  }

  /**
   * Delete Bagcart
   * @param bagcart 
   */
  deleteBagCart(bagcart: string) {
    const path = `${this.api}delete/bagcart/${bagcart}`;
    return this.http.post(path, "", httpOptions);
  }

  /**
   * Delete Color
   * @param color 
   */
  deleteColor(color: string) {
    const path = `${this.api}delete/colors/${color}`;
    return this.http.post(path, "", httpOptions);
  }

  /**
   * Delete Flight
   * @param flight 
   */
  deleteFlight(flight: string) {
    const path = `${this.api}delete/flights/${flight}`;
    return this.http.post(path, "", httpOptions);
  }

  /**
   * Delete Role
   * @param role 
   */
  deleteRole(role: string) {
    const path = `${this.api}delete/roles/${role}`;
    return this.http.post(path, "", httpOptions);
  }
}
