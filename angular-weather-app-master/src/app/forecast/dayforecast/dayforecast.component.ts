import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/models/CityDto';
import { DayForecast } from 'src/app/models/ForecastDto';

@Component({
  selector: 'app-dayforecast',
  templateUrl: './dayforecast.component.html',
  styleUrls: ['./dayforecast.component.css']
})
export class DayforecastComponent implements OnInit {
  @Input() weather: DayForecast;

  constructor() { }

  ngOnInit() {
  }

}
