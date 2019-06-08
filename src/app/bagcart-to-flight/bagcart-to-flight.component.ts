import { Component, OnInit } from '@angular/core';
import { BagCartService } from '../services/bag-cart.service';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-bagcart-to-flight',
  templateUrl: './bagcart-to-flight.component.html',
  styleUrls: ['./bagcart-to-flight.component.css']
})
export class BagcartToFlightComponent implements OnInit {

  // Alert 
  show_alert: boolean = false;
  text_alert: string = '';
  type_alert: string = '';

  //Lists
  flights: String[] = [];
  brands: String[] = [];
  bagCartsId: String[] = [];
  seccions: String[] = [];

  constructor(private service_BagCart: BagCartService, private service_Flight: FlightService) { }

  ngOnInit() { this.getFlights(); this.getBagCartsID()}

  /**
   * Show Alert
   */
  public show_Alert(value: boolean) {
    this.show_alert = value;
  }

  /**
   * Creation of a Bagcart
   */
  public a_BagcartToFlight() {
    let flight: string = (<HTMLInputElement>document.getElementById("input_Flight_BTF")).value.trim();
    let bagCartId: string = (<HTMLInputElement>document.getElementById("input_BagCarts_BTF")).value.trim();

    if (flight.length == 0 || bagCartId.length == 0) {
      this.show_alert = true;
      this.text_alert = 'Empty spaces';
      this.type_alert = 'warning';
    } else {
      const json = {
        flight_id: Number(flight),
        bagcart_id:  Number(bagCartId),
      };
      this.service_Flight.assignBagcartToFlight(json).subscribe((jsonTransfer) => {
        const jsonWEBAPI = JSON.parse(JSON.parse(JSON.stringify(jsonTransfer)));
        console.log(jsonWEBAPI);
        if (jsonWEBAPI.http_result == 1) {
          this.text_alert = jsonWEBAPI.msg;
          this.type_alert = 'success';
          this.show_alert = true;
        } else {
          this.text_alert = jsonWEBAPI.msg;
          this.type_alert = 'danger';
          this.show_alert = true;
        }
      });
    }
  }

  /**
   * Get Flights' List
   */
  public getFlights() {
    this.service_Flight.getFlightsUnassigned().subscribe((jsonTransfer) => {
      const jsonWEBAPI = JSON.parse(JSON.parse(JSON.stringify(jsonTransfer)));
      console.log(jsonWEBAPI);
      if (jsonWEBAPI.http_result == 1) {
        this.flights = jsonWEBAPI.flights;
      } else {
        this.flights = [];
        this.flights.push(jsonWEBAPI.msg)
      }
    });
  }

  /**
   * Get Brands' List
   */
  public getBrands() {
    this.service_BagCart.getBrands().subscribe((jsonTransfer) => {
      const jsonWEBAPI = JSON.parse(JSON.parse(JSON.stringify(jsonTransfer)));
      console.log(jsonWEBAPI);
      if (jsonWEBAPI.http_result == 1) {
        this.brands = jsonWEBAPI.brands;
      } else {
        this.brands = [];
        this.brands.push(jsonWEBAPI.msg)
      }
    });
  }

  
   /**
   * Get BagCart Ids' List
   */
  public getBagCartsID() {
    this.service_BagCart.getBagCartsIDBrands().subscribe((jsonTransfer) => {
      const jsonWEBAPI = JSON.parse(JSON.parse(JSON.stringify(jsonTransfer)));
      console.log(jsonWEBAPI);
      if (jsonWEBAPI.http_result == 1) {
        this.bagCartsId = jsonWEBAPI.bagcarts;
      } else {
        this.bagCartsId = [];
        this.bagCartsId.push("Error")
      }
    });
  }

  /**
   * Get seccion of a Plane
   */
  public getSeccion() {
    let flight: string = (<HTMLInputElement>document.getElementById("input_Flight_BTF")).value.trim();
    if (flight == '') {
      this.text_alert = 'Please select a Flight';
      this.type_alert = 'warning';
      this.show_alert = true;
    } else {
      this.service_Flight.getSeccions(flight).subscribe((jsonTransfer) => {
        const jsonWEBAPI = JSON.parse(JSON.parse(JSON.stringify(jsonTransfer)));
        console.log(jsonWEBAPI);
        if (jsonWEBAPI.http_result == 1) {
          this.seccions = jsonWEBAPI.sections;
        } else {
          this.seccions = [];
          this.seccions.push(jsonWEBAPI.msg)
        }
      });
    }
  }
}
