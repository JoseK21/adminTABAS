import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private service: ServiceService) { }

  ngOnInit() {
  }

}
