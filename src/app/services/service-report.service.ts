import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable({
  providedIn: 'root'
})
export class ServiceReportService {

  constructor(private http: HttpClient) { }

  private api = 'https://tabas-api.azurewebsites.net/tabas/';

  /**
   * Get Baggage By Client
   */
  getBaggageByClient() {
    const path = `${this.api}reports/baggage`;
    console.log(path);
    return this.http.get(path);
  }

  /**
   * Get Baggage by Flight
   */
  getBaggage(flight:number) {    
    const path = `${this.api}report/baggage/information/${flight}`;
    console.log(path);
    return this.http.get(path);
  }


}
