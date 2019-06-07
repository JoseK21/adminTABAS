import { Component, OnInit } from '@angular/core';
import { BagCartService } from '../services/bag-cart.service';
import { FlightService } from '../services/flight.service';
import { BaggageService } from '../services/baggage.service';
import { SignUpService } from '../services/sign-up.service';
import { DeleteServiceService } from '../services/delete-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  // Alert 
  show_alert: boolean = false;
  text_alert: string = '';
  type_alert: string = '';

  colors: String[] = [];
  flights: String[] = [];
  planes: String[] = [];
  listRole: String[] = [];
  bagCartsId: String[] = [];

  constructor(private service_BagCart: BagCartService, private service_flight: FlightService, private service_Baggage: BaggageService, private service_SignUp: SignUpService, private service_delete: DeleteServiceService) { }

  ngOnInit() { this.getPlanes(), this.getBagCartsID(), this.getColors(), this.getFlights(), this.getRoles() }

  /**
   * getColors
   */
  public getColors() {
      this.service_Baggage.getColors().subscribe((jsonTransfer) => {
        const jsonWEBAPI = JSON.parse(JSON.parse(JSON.stringify(jsonTransfer)));
        console.log(jsonWEBAPI);
        if (jsonWEBAPI.http_result == 1) {
          this.colors = jsonWEBAPI.colors;
        } else {
          this.colors = [];
        }
      });    
  }


  /**
   * getFlights
   */
  public getFlights() {
    
      this.service_flight.getFlights().subscribe((jsonTransfer) => {
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
   * getBrands
   */
  public getPlanes() {
   
      this.service_flight.getPlanes().subscribe((jsonTransfer) => {
        const jsonWEBAPI = JSON.parse(JSON.parse(JSON.stringify(jsonTransfer)));
        console.log(jsonWEBAPI);
        if (jsonWEBAPI.http_result == 1) {
          this.planes = jsonWEBAPI.airplanes;
        } else {
          this.planes = [];
        }
      });
    
  }


  /**
  * getRoles
  */
  public getRoles() {
      this.service_SignUp.getRoles().subscribe((jsonTransfer) => {
        const jsonWEBAPI = JSON.parse(JSON.parse(JSON.stringify(jsonTransfer)));
        console.log(jsonWEBAPI);
        if (jsonWEBAPI.http_result == 1) {
          this.listRole = jsonWEBAPI.roles;
        } else {
          this.listRole = [];
        }
      });
    }
  

  /**
  * get BagCarts IDs
  */
  public getBagCartsID() {
      this.service_BagCart.getBagCartsIDBrands().subscribe((jsonTransfer) => {
        const jsonWEBAPI = JSON.parse(JSON.parse(JSON.stringify(jsonTransfer)));
        console.log(jsonWEBAPI);
        if (jsonWEBAPI.http_result == 1) {
          this.bagCartsId = jsonWEBAPI.bagcarts;
        } else {
          this.bagCartsId = [];
        }
      });
    
  }

  /**
   * getBrands
   */
  public deletePlanes() {
    let dataToDelete: string = (<HTMLInputElement>document.getElementById("input_Airplane_Del")).value.trim();
    if (dataToDelete.length == 0) {
      this.show_alert = true;
      this.text_alert = 'Flight Id entry blank';
      this.type_alert = 'warning';
    } else {
      this.service_delete.deleteAirplane(dataToDelete).subscribe((jsonTransfer) => {
        const jsonWEBAPI = JSON.parse(JSON.parse(JSON.stringify(jsonTransfer)));
        console.log(jsonWEBAPI);
        if (jsonWEBAPI.http_result == 1) {
          this.planes = jsonWEBAPI.airplanes;
        } else {
          this.planes = [];
        }
      });
    }
  }

  /**
  * get BagCarts IDs
  */
 public deleteBagCartsID() {
  let dataToDelete: string = (<HTMLInputElement>document.getElementById("input_BagCart_Del")).value.trim();
  if (dataToDelete.length == 0) {
    this.show_alert = true;
    this.text_alert = 'Flight Id entry blank';
    this.type_alert = 'warning';
  } else {
    this.service_delete.deleteBagCart(dataToDelete).subscribe((jsonTransfer) => {
      const jsonWEBAPI = JSON.parse(JSON.parse(JSON.stringify(jsonTransfer)));
      console.log(jsonWEBAPI);
      if (jsonWEBAPI.http_result == 1) {
        this.bagCartsId = jsonWEBAPI.bagcarts;
      } else {
        this.bagCartsId = [];
      }
    });
  }
}
  
  /**
   * getColors
   */
  public deleteColors() {
    let dataToDelete: string = (<HTMLInputElement>document.getElementById("input_Color_Del")).value.trim();
    if (dataToDelete.length == 0) {
      this.show_alert = true;
      this.text_alert = 'Flight Id entry blank';
      this.type_alert = 'warning';
    } else {
      this.service_delete.deleteColor(dataToDelete).subscribe((jsonTransfer) => {
        const jsonWEBAPI = JSON.parse(JSON.parse(JSON.stringify(jsonTransfer)));
        console.log(jsonWEBAPI);
        if (jsonWEBAPI.http_result == 1) {
          this.colors = jsonWEBAPI.colors;
        } else {
          this.colors = [];
        }
      });
    }
  }


  /**
   * getFlights
   */
  public deleteFlights() {
    let dataToDelete: string = (<HTMLInputElement>document.getElementById("input_Flight_Del")).value.trim();
    if (dataToDelete.length == 0) {
      this.show_alert = true;
      this.text_alert = 'Flight Id entry blank';
      this.type_alert = 'warning';
    } else {
      this.service_delete.deleteFlight(dataToDelete).subscribe((jsonTransfer) => {
        const jsonWEBAPI = JSON.parse(JSON.parse(JSON.stringify(jsonTransfer)));
        console.log(jsonWEBAPI);
        if (jsonWEBAPI.http_result == 1) {
          this.flights = jsonWEBAPI.flights;
        } else {
          this.flights = [];
        }
      });
    }
  }


  


  /**
  * getRoles
  */
  public deleteRoles() {
    let dataToDelete: string = (<HTMLInputElement>document.getElementById("input_Role_Del")).value.trim();
    if (dataToDelete.length == 0) {
      this.show_alert = true;
      this.text_alert = 'Flight Id entry blank';
      this.type_alert = 'warning';
    } else {
      this.service_delete.deleteRole(dataToDelete).subscribe((jsonTransfer) => {
        const jsonWEBAPI = JSON.parse(JSON.parse(JSON.stringify(jsonTransfer)));
        console.log(jsonWEBAPI);
        if (jsonWEBAPI.http_result == 1) {
          this.listRole = jsonWEBAPI.roles;
        } else {
          this.listRole = [];
        }
      });
    }
  }

  
}
