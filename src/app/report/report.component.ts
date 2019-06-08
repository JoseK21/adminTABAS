import { Component, OnInit } from '@angular/core';
import { ServiceReportService } from '../services/service-report.service';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  // Alert 
  show_alert: boolean = false;
  text_alert: string = '';
  type_alert: string = '';
  //Lists
  baggages: [];
  baggageInfo: String[] = [];
  flights: [];
  list = [];
  list_flights = [];

  constructor(private service_Report: ServiceReportService, private service_Flight: FlightService) { }

  ngOnInit() { this.getFlights() }

  /**
   * Get Flights' List
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
   * Generate Report Custumer
   */
  public reportCustumer() {
    this.service_Report.getBaggageByClient().subscribe((jsonTransfer) => {
      const userStr = JSON.stringify(jsonTransfer);
      const jsonWEBAPI = JSON.parse(JSON.parse(userStr));
      console.log(jsonWEBAPI);
      if (jsonWEBAPI.http_result == 1) {
        this.baggages = JSON.parse("[" + jsonWEBAPI.baggage + "]");
      } else {
        alert("Error - Get Baggage by client");
      }
    });
  }

  /**
   * Generate Report Baggage
   */
  public reportBaggage() {
    let f: string = (<HTMLInputElement>document.getElementById("input_Flight_R")).value.trim();
    this.service_Report.getBaggage(Number(f)).subscribe((jsonTransfer) => {
      const jsonWEBAPI = JSON.parse(JSON.parse(JSON.stringify(jsonTransfer)));
      console.log(jsonWEBAPI);
      if (jsonWEBAPI.http_result == 1) {
        this.list = [];
        this.list.push(jsonWEBAPI.flight);
        this.list.push(jsonWEBAPI.model);
        this.list.push(jsonWEBAPI.weight);
        this.list.push(jsonWEBAPI.total_suitcase);
        this.list.push(jsonWEBAPI.suitcase_rejected);
        this.list.push(jsonWEBAPI.suitcase_acepted);
      } else {
        this.list = [];
        this.list.push('-E-');
        this.list.push('-E-');
        this.list.push('-E-');
        this.list.push('-E-');
        this.list.push('-E-');
        this.list.push('-E-');
      }
    });
  }
}
