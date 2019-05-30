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
  
  flights: String[] = [];
  brands: String[] = [];

  constructor(private service_BagCart: BagCartService , private service_Flight: FlightService) { }
  
  ngOnInit() {  }

  /**
   * show_Alert
   */
  public show_Alert(value: boolean) {
    this.show_alert = value;
  }

  /**
   * createBagcart
   */
  public a_BagcartToFlight() {
    let flight: string = (<HTMLInputElement>document.getElementById("input_Flight_BTF")).value.trim();
    let brand: string = (<HTMLInputElement>document.getElementById("input_Brands_BTF")).value.trim();    

    if (flight.length == 0 || brand.length == 0) {
      this.show_alert = true;
      this.text_alert = 'Empty spaces';
      this.type_alert = 'warning';
    } else {
      const json = {
        flight_id: flight,
        bg_brand: brand,
      };
      this.service_Flight.assignBagcartToFlight(json).subscribe((jsonTransfer) => {
        const userStr = JSON.stringify(jsonTransfer);
        const jsonWEBAPI = JSON.parse(JSON.parse(userStr));
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
   * getFlights
   */
  public getFlights() {
    this.service_Flight.getFlights().subscribe((jsonTransfer) => {
      const userStr = JSON.stringify(jsonTransfer);
      const jsonWEBAPI = JSON.parse(JSON.parse(userStr));
      if (jsonWEBAPI.http_result == 1) {
        this.flights = jsonWEBAPI.flights;
      } else {
        this.flights = [];
        this.flights.push(jsonWEBAPI.msg)
      }
    });
  }

  /**
   * getBrands
   */
  public getBrands() {
    this.service_BagCart.getBrands().subscribe((jsonTransfer) => {
      const userStr = JSON.stringify(jsonTransfer);
      const jsonWEBAPI = JSON.parse(JSON.parse(userStr));
      if (jsonWEBAPI.http_result == 1) {
        this.brands = jsonWEBAPI.brands;
      } else {
        this.brands = [];
        this.brands.push(jsonWEBAPI.msg)
      }
    });
  }

}
