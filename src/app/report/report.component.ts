import { Component, OnInit } from '@angular/core';
import { ServiceReportService } from '../services/service-report.service';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  baggages: [];  // Report Baggage by CLient
  baggageInfo = []; // Report Baggege by flight
  flights: []; // List of flights

  list_flights = [];  //Default


  // Alert 
  show_alert: boolean = false;
  text_alert: string = '';
  type_alert: string = '';

  constructor(private service_Report: ServiceReportService, private service_Flight: FlightService) { }

  ngOnInit() {  this.getFlights() }

  /**
   * getFlights
   */
  public getFlights() {
    this.service_Flight.getFlights().subscribe((jsonTransfer) => {
      const jsonWEBAPI = JSON.parse(JSON.parse(JSON.stringify(jsonTransfer)));
      console.log(jsonWEBAPI);
      if (jsonWEBAPI.http_result == 1) {
        this.flights = jsonWEBAPI.flights;        
      } else {
        this.flights = [];
      }
    });
  }

  /**
   * reportCustumer
   */
  public reportCustumer() {
    this.service_Report.getBaggageByClient().subscribe((jsonTransfer) => {
      const userStr = JSON.stringify(jsonTransfer); // Object to String
        const jsonWEBAPI = JSON.parse(JSON.parse(userStr)); // String to Json 
      console.log(jsonWEBAPI);
      if (jsonWEBAPI.http_result == 1) {
        this.baggages = JSON.parse("[" + jsonWEBAPI.baggage + "]");  
      } else {
        alert("Error - Get Baggage by client");
      }
    });
  }

  /**
   * reportCustumer
   */
  public reportBaggage() {
    let f: string = (<HTMLInputElement>document.getElementById("input_Flight_R")).value.trim();
    this.service_Report.getBaggage(Number(f)).subscribe((jsonTransfer) => {
      const jsonWEBAPI = JSON.parse(JSON.parse(JSON.stringify(jsonTransfer)));
      console.log(jsonWEBAPI);
      if (jsonWEBAPI.http_result == 1) {        
        this.baggageInfo = jsonWEBAPI;
      } else {
        alert("Error - Get Baggage by flight");
      }
    });
  }
}
