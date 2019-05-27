import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services.service';

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
  brands: String[] = [];
  models: String[] = [];
  constructor(private service: ServiceService) { }


  ngOnInit() {

  }


  /**
   * show_Modal
   */
  public show_Alert(value: boolean) {
    this.show_alert = value;
  }

  /**
   * createBagcart
   */
  public createBagcart() {
    let brand: string = (<HTMLInputElement>document.getElementById("input_Brand_CB")).value.trim();
    let model: string = (<HTMLInputElement>document.getElementById("input_Model_CB")).value.trim();

    if (brand.length == 0 || model.length == 0) {
      this.show_alert = true;
      this.text_alert = 'Empty spaces';
      this.type_alert = 'warning';
    } else {
      const json = {
        brand: brand,
        model: model,
      };

      console.log(JSON.parse(JSON.stringify(json)));

      this.service.createBagCart(json).subscribe((jsonTransfer) => {
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
   * getColors
   */
  public getBrands() {
    this.service.getBrands().subscribe((jsonTransfer) => {
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
   * getColors
   */
  public getModels() {
    this.service.getModels().subscribe((jsonTransfer) => {
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
