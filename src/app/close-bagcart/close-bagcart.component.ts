import { Component, OnInit } from '@angular/core';
import { BagCartService } from '../services/bag-cart.service';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-close-bagcart',
  templateUrl: './close-bagcart.component.html',
  styleUrls: ['./close-bagcart.component.css']
})
export class CloseBagcartComponent implements OnInit {

  
  
  // Alert 
  show_alert: boolean = false;
  text_alert: string = '';
  type_alert: string = '';
  // Alert 2
  show_alert_2: boolean = false;
  text_alert_2: string = 'Nada';
  type_alert_2: string = 'success';

  flight_IDs: String[] = [];

  constructor(private service_BagCart: BagCartService , private service_Flight: FlightService) { }

  ngOnInit() { }

  /**
   * show_Alert
   */
  public show_Alert(value: boolean) {
    this.show_alert = value;
  }

  /**
   * closeBagcart
   */
  public closeBagcart() {
    let flight_id: string = (<HTMLInputElement>document.getElementById("input_Flight_ID_CB")).value.trim();
    if (flight_id.length == 0) {
      this.show_alert = true;
      this.text_alert = 'Flight Id entry blank';
      this.type_alert = 'warning';
    } else {
      this.service_BagCart.closeBagCart(flight_id).subscribe((jsonTransfer) => {
        const userStr = JSON.stringify(jsonTransfer);
        const jsonWEBAPI = JSON.parse(JSON.parse(userStr));
        if (jsonWEBAPI.http_result == 1) {
          this.text_alert = jsonWEBAPI.seal;
          this.type_alert = 'primary';
          this.show_alert = true;
        } else {
          this.text_alert = jsonWEBAPI.seal;
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

      console.log(jsonWEBAPI);
      if (jsonWEBAPI.http_result == 1) {
        this.flight_IDs = jsonWEBAPI.flights;
      } else {
        this.flight_IDs = [];
        this.flight_IDs.push(jsonWEBAPI.msg)
      }
    });
  }

}
