import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services.service';

@Component({
  selector: 'app-close-bagcart',
  templateUrl: './close-bagcart.component.html',
  styleUrls: ['./close-bagcart.component.css']
})
export class CloseBagcartComponent implements OnInit {

  
  constructor(private service: ServiceService) { }

  ngOnInit() {
  }

}
