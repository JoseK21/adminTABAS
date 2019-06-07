import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class DeleteServiceService {

  private api = 'https://tabas-api.azurewebsites.net/tabas/';

  constructor(private http: HttpClient) { }

  deleteAirplane(airplane: string) {
    const path = `${this.api}delete/airplane/${airplane}`;
    return this.http.post(path, "", httpOptions);
  }
  deleteBagCart(bagcart: string) {
    const path = `${this.api}delete/bagcart/${bagcart}`;
    return this.http.post(path, "", httpOptions);
  }
  deleteColor(color: string) {
    const path = `${this.api}delete/colors/${color}`;
    return this.http.post(path, "", httpOptions);
  }
  deleteFlight(flight: string) {
    const path = `${this.api}delete/flights/${flight}`;
    return this.http.post(path, "", httpOptions);
  }
  deleteRole(role: string) {
    const path = `${this.api}delete/roles/${role}`;
    return this.http.post(path, "", httpOptions);
  }
}
