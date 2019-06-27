import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForecastDto } from '../models/ForecastDto';
import { OpenWeatherAPI } from '../services/openweatherapi';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  
  cityId: number;
  forecast: ForecastDto;

  constructor(private route: ActivatedRoute, private serviceApi: OpenWeatherAPI) { }

  ngOnInit() {
    this.getParams();
    console.log(this.forecast);
  }

  async getParams() {
    await this.route.params.subscribe(params => { this.cityId = +params['cityId']; });
    await this.serviceApi.getForecastForCity(this.cityId).subscribe(value => {
      this.forecast = value;
    });
  }

}
