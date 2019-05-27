import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services.service';

@Component({
  selector: 'app-plane-to-flight',
  templateUrl: './plane-to-flight.component.html',
  styleUrls: ['./plane-to-flight.component.css']
})
export class PlaneToFlightComponent implements OnInit {

  
  
  // Alert 
  show_alert: boolean = false;
  text_alert: string = '';
  type_alert: string = '';
  
  flights: String[] = [];
  planes: String[] = [];

  constructor(private service: ServiceService) { }
  
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
  public a_PlaneToFlight() {
    let plane: string = (<HTMLInputElement>document.getElementById("input_Planes_PTF")).value.trim();   
    let flight: string = (<HTMLInputElement>document.getElementById("input_Flight_PTF")).value.trim();     

    if (flight.length == 0 || plane.length == 0) {
      this.show_alert = true;
      this.text_alert = 'Empty spaces';
      this.type_alert = 'warning';
    } else {
      const json = {
        flight_id: flight,
        plane: plane,
      };
      this.service.assignPlaneToFlight(json).subscribe((jsonTransfer) => {
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
    this.service.getFlights().subscribe((jsonTransfer) => {
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
  public getPlanes() {
    this.service.getPlanes().subscribe((jsonTransfer) => {
      const userStr = JSON.stringify(jsonTransfer);
      const jsonWEBAPI = JSON.parse(JSON.parse(userStr));
      if (jsonWEBAPI.http_result == 1) {
        this.planes = jsonWEBAPI.planes;
      } else {
        this.planes = [];
        this.planes.push(jsonWEBAPI.msg)
      }
    });
  }


}
