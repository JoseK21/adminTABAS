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


  listRole: String[] = ["A", "B", "C"];
  constructor(private service: ServiceService) { }

  ngOnInit() {
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
      alert("ERROR - ningun rol seleccionado");
      return 'ERROR';
    } else {
      alert(str);
      return str;
    }

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

      this.text_alert = 'Empty spaces';
      this.type_alert = 'warning';
    }
    else if (this.roleCheck() == "ERROR") {
      this.text_alert = 'Role Empty';
      this.type_alert = 'warning';
    } else {
      const json = {
        full_name: f_name + " " + l_name,
        email: email,
        phone_number: phone_number,
        username: username,
        password: password,
      };

      console.log(JSON.parse(JSON.stringify(json)));

      this.service.signUpAdmin(json).subscribe((jsonTransfer) => {
        const jsonWEBAPI = JSON.parse(JSON.parse(JSON.stringify(jsonTransfer)));
        if (jsonWEBAPI.http_result == 1) {
          const json_role = {
            role: this.roleCheck()
          };
          this.service.adminSetRole(username, json_role).subscribe((jsonTransferRole) => {
            const jsonWEBAPI_Role = JSON.parse(JSON.parse(JSON.stringify(jsonTransferRole)));
            if (jsonWEBAPI_Role.http_result == 1) {
              this.text_alert = jsonWEBAPI_Role.msg;
              this.type_alert = 'success';
            } else {
              this.text_alert = jsonWEBAPI_Role.msg;
              this.type_alert = 'danger';
            }
          });
        } else {
          this.text_alert = jsonWEBAPI.msg;
          this.type_alert = 'danger';
        }
      });
    }
    this.show_alert = true;

  }
}