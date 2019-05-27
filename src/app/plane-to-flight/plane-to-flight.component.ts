import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services.service';

@Component({
  selector: 'app-plane-to-flight',
  templateUrl: './plane-to-flight.component.html',
  styleUrls: ['./plane-to-flight.component.css']
})
export class PlaneToFlightComponent implements OnInit {

  
  constructor(private service: ServiceService) { }

  ngOnInit() {
  }

}
