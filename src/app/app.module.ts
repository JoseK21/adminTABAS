import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpAdminComponent } from './sign-up-admin/sign-up-admin.component';
import { CreateSuitcaseComponent } from './create-suitcase/create-suitcase.component';
import { CreateBagcartComponent } from './create-bagcart/create-bagcart.component';
import { PlaneToFlightComponent } from './plane-to-flight/plane-to-flight.component';
import { BagcartToFlightComponent } from './bagcart-to-flight/bagcart-to-flight.component';
import { CloseBagcartComponent } from './close-bagcart/close-bagcart.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignUpAdminComponent,
    CreateSuitcaseComponent,
    CreateBagcartComponent,
    PlaneToFlightComponent,
    BagcartToFlightComponent,
    CloseBagcartComponent,
    SignOutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
