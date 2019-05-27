import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services.service';

@Component({
  selector: 'app-create-suitcase',
  templateUrl: './create-suitcase.component.html',
  styleUrls: ['./create-suitcase.component.css']
})
export class CreateSuitcaseComponent implements OnInit {

  // Alert 
  show_alert: boolean = false;
  text_alert: string = '';
  type_alert: string = '';

  // Colors
  colors: String[] = [];


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
   * createSuitcase
   */
  public createSuitcase() {
    let username: string = (<HTMLInputElement>document.getElementById("input_Username_CS")).value.trim();
    let weight: string = (<HTMLInputElement>document.getElementById("input_Weight_CS")).value.trim();
    let color: string = (<HTMLInputElement>document.getElementById("input_Color_CS")).value.trim();

    if (username.length == 0 || weight.length == 0 || color.length == 0) {
      this.show_alert = true;
      this.text_alert = 'Empty spaces';
      this.type_alert = 'warning';
    } else {
      const json = {
        username: username,
        weight: parseFloat(weight),
        color: color
      };
      this.service.createSuitcase(json).subscribe((jsonTransfer) => {
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
  public getColors() {
    this.service.getColors().subscribe((jsonTransfer) => {
      const userStr = JSON.stringify(jsonTransfer);
      const jsonWEBAPI = JSON.parse(JSON.parse(userStr));
      if (jsonWEBAPI.http_result == 1) {
        this.colors = jsonWEBAPI.colors;
      }else{
        this.colors = [];
        this.colors.push(jsonWEBAPI.msg)
      }
    });
  }

}
