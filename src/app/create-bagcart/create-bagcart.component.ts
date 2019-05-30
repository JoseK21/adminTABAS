import { Component, OnInit } from '@angular/core';
import { BagCartService } from '../services/bag-cart.service';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-create-bagcart',
  templateUrl: './create-bagcart.component.html',
  styleUrls: ['./create-bagcart.component.css']
})
export class CreateBagcartComponent implements OnInit {

  // Alert 
  show_alert: boolean = false;
  text_alert: string = '';
  type_alert: string = '';
  // Alert 2
  show_alert_2: boolean = false;
  text_alert_2: string = 'Nada';
  type_alert_2: string = 'success';

  brands: String[] = [];
  models: String[] = [];

  constructor(private service_BagCart: BagCartService, private service_Flight: FlightService) { }

  ngOnInit() {

  }


  /**
   * show_Alert
   */
  public show_Alert(value: boolean) {
    this.show_alert = value;
  }

  /**
   * show_Aler_2
   */
  public show_Alert_2(value: boolean) {
    this.show_alert_2 = value;
  }

  /**
   * createBagcart
   */
  public createBagcart() {
    let brand: string = (<HTMLInputElement>document.getElementById("input_Brand_CB")).value.trim();
    let model: string = (<HTMLInputElement>document.getElementById("input_Model_CB")).value.trim();
    let capacity: string = (<HTMLInputElement>document.getElementById("input_Capacity_CB")).value.trim();

    if (brand.length == 0 || model.length == 0 || capacity.length == 0) {
      this.show_alert = true;
      this.text_alert = 'Empty spaces';
      this.type_alert = 'warning';
    } else {
      const json = {
        brand: brand,
        model: Number(model),
        capacity: Number(capacity)
      };
      this.service_BagCart.createBagCart(json).subscribe((jsonTransfer) => {
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
   * addBrand
   */
  public addBrand() {
    let add_brand: string = (<HTMLInputElement>document.getElementById("input_Brand_CB_Add")).value.trim();

    if (add_brand.length == 0) {
      this.text_alert_2 = 'Empty spaces';
      this.type_alert_2 = 'warning';
      this.show_alert_2 = true;
    } else {
      const json = {
        brand: add_brand,
      };
      this.service_BagCart.addBrand(json).subscribe((jsonTransfer) => {
        const userStr = JSON.stringify(jsonTransfer);
        const jsonWEBAPI = JSON.parse(JSON.parse(userStr));
        if (jsonWEBAPI.http_result == 1) {
          this.text_alert_2 = jsonWEBAPI.msg;
          this.type_alert_2 = 'success';
          this.show_alert_2 = true;
        } else {
          this.text_alert_2 = jsonWEBAPI.msg;
          this.type_alert_2 = 'danger';
          this.show_alert_2 = true;
        }
      });
    }
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

  /**
   * getModels
   */
  public getModels() {
    this.service_Flight.getPlanes().subscribe((jsonTransfer) => {
      const userStr = JSON.stringify(jsonTransfer);
      const jsonWEBAPI = JSON.parse(JSON.parse(userStr));
      if (jsonWEBAPI.http_result == 1) {
        this.models = jsonWEBAPI.models;
      } else {
        this.models = [];
        this.models.push(jsonWEBAPI.msg)
      }
    });
  }

}
