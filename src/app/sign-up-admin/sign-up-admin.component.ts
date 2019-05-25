import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services.service';

@Component({
  selector: 'app-sign-up-admin',
  templateUrl: './sign-up-admin.component.html',
  styleUrls: ['./sign-up-admin.component.css']
})
export class SignUpAdminComponent implements OnInit {

  // Alert 
  show_alert: boolean = false;
  text_alert: string = 'All is perfect';
  type_alert: string = 'success';
  // Interface
  password_show: string = 'password';

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
  * editAlert
  */
  public editAlert(text: string, type: string) {
    this.text_alert = text;
    this.type_alert = type;
  }

  /**
   * showPassword
   */
  public showPassword() {
    if ((<HTMLInputElement>document.getElementById("check_Password_SU")).checked) {
      this.password_show = 'text';
    } else {
      this.password_show = 'password';
    }
  }

  /**
   * SignUp
   */
  public SignUp() {
    let f_name: string = (<HTMLInputElement>document.getElementById("input_FirstName")).value.trim();
    let l_name: string = (<HTMLInputElement>document.getElementById("input_LastName")).value.trim();
    let email: string = (<HTMLInputElement>document.getElementById("input_Email")).value.trim();
    let phone_number: string = (<HTMLInputElement>document.getElementById("input_PhoneNumber")).value.trim();
    let username: string = (<HTMLInputElement>document.getElementById("input_Username_SU")).value.trim();
    let password: string = (<HTMLInputElement>document.getElementById("input_Password_SU")).value.trim();

    console.log(f_name + " \n" + l_name + " \n" + email + " \n" + phone_number + " \n" + username + " \n" + password);


    if (f_name.length == 0 || l_name.length == 0 || email.length == 0 || phone_number.length == 0 || username.length == 0 || password.length == 0) {
      this.show_alert = true;
      this.text_alert = 'Empty spaces';
      this.type_alert = 'warning';
    } else {
      const json = {
        full_name: f_name + " " + l_name,
        email: email,
        phone_number: phone_number,
        username: username,
        password: password
      };

      console.log(JSON.parse(JSON.stringify(json)));

      this.service.signUpAdmin(json).subscribe((jsonTransfer) => {
        const userStr = JSON.stringify(jsonTransfer);
        const jsonWEBAPI = JSON.parse(JSON.parse(userStr));
        if (jsonWEBAPI.http_result == 1) {
          this.editAlert(jsonWEBAPI.msg, "success");
        } else {
          this.editAlert(jsonWEBAPI.msg, "danger");
        }
      });

    }

  }
}