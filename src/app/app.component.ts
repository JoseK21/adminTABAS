import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Show password : check box
  password_show : string = 'password';

  //
  window : string = "LogIn"; // or Menu

  // Alert 
  show_alert : boolean = false;
  text_alert : string = 'All is perfect';
  type_alert : string = 'success';

  // Router
  router_Link : string = '';

  constructor() { }

  ngOnInit() {
  }

  /**
   * show_Modal
   */
  public show_Alert(value : boolean) {
    this.show_alert = value;
  }

  
  /**
   * getDataFromDOM
   */
  public getDataFromDOM() {
    let username : string = (<HTMLInputElement>document.getElementById("input_Username")).value.trim(); 
    let password : string = (<HTMLInputElement>document.getElementById("input_Password")).value.trim(); 
    let role : string = (<HTMLInputElement>document.getElementById("input_Role")).value.trim();
    
    if(username.length == 0 || password.length == 0 || role.length == 0){      
      this.show_alert = true;
      this.text_alert = 'Empty spaces';
      this.type_alert  = 'warning';
    }else{
      this.window = 'Menu';
    }
  }

  /**
   * showPassword
   */
  public showPassword() {
    if((<HTMLInputElement>document.getElementById("check_Password")).checked){
      this.password_show = 'text';
    }else{
      this.password_show = 'password';
    }    
  }
}
