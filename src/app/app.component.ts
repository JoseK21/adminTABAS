import { Component } from '@angular/core';
import { ServiceService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Show password : check box
  password_show: string = 'password';

  // Window
  window: string = 'Menu'; // or Menu/LogIn

  // Alert 
  show_alert: boolean = false;
  text_alert: string = 'All is perfect';
  type_alert: string = 'success';

  // Router
  router_Link: string = '';

  // Main View
  showImage: boolean = true;
  constructor(private service: ServiceService) { }

  ngOnInit() {
  }

  imageView(show:boolean){
    this.showImage=show
  }

  /**
   * show_Alert
   * @param value 
   */
  public show_Alert(value: boolean) {
    this.show_alert = value;
  }

  /**
  * showPassword
  */
  public showPassword() {
    if ((<HTMLInputElement>document.getElementById("check_Password")).checked) {
      this.password_show = 'text';
    } else {
      this.password_show = 'password';
    }
  }


  /**
   * windows
   * @param window 
   */
  public windows(window: string) {
    this.window = window;
  }

  /**
   * SignUpAdmin
   */
  public SignUpAdmin() {
    this.window = "SignUpAdmin";
  }

  /**
   * logIn  LogIn Admin 
   */
  public logIn() {
    let username: string = (<HTMLInputElement>document.getElementById("input_Username")).value.trim();
    let password: string = (<HTMLInputElement>document.getElementById("input_Password")).value.trim();
    let role: string = (<HTMLInputElement>document.getElementById("input_Role")).value.trim();

    if (username.length == 0 || password.length == 0 || role.length == 0) {
      this.show_alert = true;
      this.text_alert = 'Empty spaces';
      this.type_alert = 'warning';
    } else {
      const json = {
        username: username,
        password: password,
        // role: role
      };
      this.service.logIn(json).subscribe((jsonTransfer) => {
        const userStr = JSON.stringify(jsonTransfer);
        const jsonWEBAPI = JSON.parse(JSON.parse(userStr));
        if (jsonWEBAPI.http_result == 1) {
          this.window = 'Menu';
        } else {
          this.text_alert = jsonWEBAPI.msg;
          this.type_alert = 'danger';
          this.show_alert = true;
        }
      });

    }
  }
}
