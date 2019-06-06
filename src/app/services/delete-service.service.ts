import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class DeleteServiceService {

  // private api = 'https://tabas-api.azurewebsites.net/tabas/';
  private api = '/tabas/';

  constructor(private http: HttpClient) { }

  deleteAirplane(airplane:string) {
    const path = `${this.api}delete/airplane/${airplane}`;
    return this.http.delete(path);
  }
  deleteBagCart(bagcart:string) {
    const path = `${this.api}delete/bagcart/${bagcart}`;
    return this.http.delete(path);
  }
  deleteColor(color:string) {
    const path = `${this.api}delete/colors/${color}`;
    return this.http.delete(path);
  }
  deleteFlight(flight:string) {
    const path = `${this.api}delete/flights/${flight}`;
    return this.http.delete(path);
  }
  deleteRole(role:string) {
    const path = `${this.api}delete/roles/${role}`;
    return this.http.delete(path);
  }
}
