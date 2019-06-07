import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable({
  providedIn: 'root'
})
export class BaggageService {

  private api = 'https://tabas-api.azurewebsites.net/tabas/';

  constructor(private http: HttpClient) { }


  /**
   * Get all Colors
   */
  getColors() {
    const path = `${this.api}colors`;
    console.log(path);
    return this.http.get(path);
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



}
