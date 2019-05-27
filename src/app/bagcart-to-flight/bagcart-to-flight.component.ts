import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services.service';

@Component({
  selector: 'app-bagcart-to-flight',
  templateUrl: './bagcart-to-flight.component.html',
  styleUrls: ['./bagcart-to-flight.component.css']
})
export class BagcartToFlightComponent implements OnInit {

  
  constructor(private service: ServiceService) { }

  ngOnInit() {
  }

}
