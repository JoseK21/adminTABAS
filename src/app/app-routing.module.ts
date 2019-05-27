import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpAdminComponent } from './sign-up-admin/sign-up-admin.component';
import { CreateSuitcaseComponent } from './create-suitcase/create-suitcase.component';
import { CreateBagcartComponent } from './create-bagcart/create-bagcart.component';
import { PlaneToFlightComponent } from './plane-to-flight/plane-to-flight.component';
import { BagcartToFlightComponent } from './bagcart-to-flight/bagcart-to-flight.component';
import { CloseBagcartComponent } from './close-bagcart/close-bagcart.component';
import { AppComponent } from './app.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {path:"SignUpAdmin" , component:SignUpAdminComponent},

  {path:"C_Suitcases" , component:CreateSuitcaseComponent},
  {path:"C_BagCart" , component:CreateBagcartComponent},

  {path:"A_PlaneToFlight" , component:PlaneToFlightComponent},
  {path:"A_BagCartToFlight" , component:BagcartToFlightComponent},

  {path:"Report" , component:ReportComponent},

  {path:"Close_BagCart" , component:CloseBagcartComponent},

 // { path: '', component: AppComponent },  

  { path: '**', pathMatch: 'full', redirectTo: 'pageNotFound' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
