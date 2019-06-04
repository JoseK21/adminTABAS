import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../services/sign-up.service';

@Component({
  selector: 'app-sign-up-admin',
  templateUrl: './sign-up-admin.component.html',
  styleUrls: ['./sign-up-admin.component.css']
})
export class SignUpAdminComponent implements OnInit {
  // Alert 
  show_alert: boolean = false;
  text_alert: string = '';
  type_alert: string = '';
  // Interface
  password_show: string = 'password';
  listRole: String[] = [];

  i: number = 0;
  str: string = '';

  constructor(private service_SignUp: SignUpService) { }

  ngOnInit() { this.getRoles(); }

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

    if (f_name.length == 0 || l_name.length == 0 || email.length == 0 || phone_number.length == 0 || username.length == 0 || password.length == 0) {
      this.text_alert = 'Empty spaces';
      this.type_alert = 'warning';
    }
    else if (this.roleCheck() == 'ERROR') {
      this.text_alert = 'Please, Set Roles';
      this.type_alert = 'warning';
    } else {
      const json = {
        full_name: f_name + " " + l_name,
        email: email,
        phone_number: phone_number,
        username: username,
        password: password,
      };

      this.service_SignUp.signUpAdmin(json).subscribe((jsonTransfer) => {
        const jsonWEBAPI = JSON.parse(JSON.parse(JSON.stringify(jsonTransfer)));
        console.log(jsonWEBAPI);
        this.str = jsonWEBAPI.msg;
        if (jsonWEBAPI.http_result == 1) {
          this.i = 1;
        } else {
          this.i = 0;
        }
      });
      this.assingRoles(username);
    }
    this.show_alert = true;
  }

  /**
   * assingRoles
   */
  public assingRoles(username: string) {
    if (this.i = 1) {
      const json_role = {
        roles: this.roleCheck()
      }
      this.service_SignUp.adminSetRole(username, json_role).subscribe((jsonTransferRole) => {
        const jsonWEBAPI_Role = JSON.parse(JSON.parse(JSON.stringify(jsonTransferRole)));
        console.log(jsonWEBAPI_Role);
        if (jsonWEBAPI_Role.http_result == 1) {
          this.text_alert = jsonWEBAPI_Role.msg;
          this.type_alert = 'success';
        } else {
          this.text_alert = jsonWEBAPI_Role.msg;
          this.type_alert = 'danger';
        }
      });
    } else {
      this.text_alert = this.str;
      this.type_alert = 'danger';
    }
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
        this.listRole.push("Error")
      }
    });
  }

  /**
   * show_Modal
   */
  public show_Alert(value: boolean) {
    this.show_alert = value;
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
  * roleCheck
  */
  public roleCheck() {
    let str: String[] = [];
    for (let index = 0; index < this.listRole.length; index++) {
      const element = this.listRole[index];
      if (((<HTMLInputElement>document.getElementById("check_" + element)).checked)) {
        str.push(element);
      }
    }
    if (str.length == 0) {
      return 'ERROR';
    } else {
      return str;
    }
  }
}