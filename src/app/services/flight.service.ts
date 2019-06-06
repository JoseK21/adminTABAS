import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable({
  providedIn: 'root'
})
export class FlightService {

  // private api = 'https://tabas-api.azurewebsites.net/tabas/';
  private api = '/tabas/';

  constructor(private http: HttpClient) { }


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
   * Get all Planes
   */
  getPlanes() {
    const path = `${this.api}planes`;
    console.log(path);
    return this.http.get(path);
  }

  

  /**
   * Get all Flights
   */
  getFlights() {
    const path = `${this.api}flights/active`;
    console.log(path);
    return this.http.get(path);
  }

  /**
   * Get seccions of a plane
   */
  getSeccions(flight:string) {
    const path = `${this.api}${flight}/sections`;
    console.log(path);
    return this.http.get(path);
  }

  /**
   * Get all Flights Unassigned
   */
  getFlightsUnassigned() {
    const path = `${this.api}flights/unassigned`;  
    console.log(path);
    return this.http.get(path);
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
   * Assign Bagcart To Flight
   * @param json {"flight_id": X, "bg_brand": XXXX}
   */
  assignPlaneToFlight(json: any) {
    console.log(JSON.parse(JSON.stringify(json)));
    const path = `${this.api}flight/plane/assign`;
    return this.http.post(path, "'" + JSON.stringify(json) + "'", httpOptions);
  }

  /**
   * get sections of a flight
   * @param flightID Id of Flight to get seccion
   */
  GetFlightSections(flightID: string) {
    const path = `${this.api}${flightID}/sections`;
    console.log(path);
    return this.http.get(path);
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


  /**
   * Get Unassigned Baggage
   */
  getUnassignedBaggage() {
    const path = `${this.api}baggage/unassigned`;
    console.log(path);
    return this.http.get(path);
  }



  // I Don´t remember this method
  
  /**
   * Get all Models
   */
  getModels() {
    const path = `${this.api}bagcart/models`;
    console.log(path);
    return this.http.get(path);
  }


}
