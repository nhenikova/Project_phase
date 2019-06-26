import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../../models/weather';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  @Input() city: Weather;
  @Input() response: Weather;

  constructor() { }

  ngOnInit() {
  }

}
