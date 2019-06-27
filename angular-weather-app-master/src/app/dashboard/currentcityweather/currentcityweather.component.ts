import { Component, OnInit, Input } from '@angular/core';
import { OpenWeatherAPI } from 'src/app/services/openweatherapi';
import { CityDto } from 'src/app/models/CityDto';

@Component({
  selector: 'app-currentcityweather',
  templateUrl: './currentcityweather.component.html',
  styleUrls: ['./currentcityweather.component.css']
})
export class CurrentcityweatherComponent implements OnInit {
  @Input() city: string;
  weather: CityDto;

  constructor(private serviceApi: OpenWeatherAPI) {
  }

  ngOnInit() {
    console.log(this.city);
    this.loadWeather();
  }

  async loadWeather() {

    this.weather = await this.serviceApi.getActualWeatherForCity2(this.city);

    // this.serviceApi.getActualWeatherForCity(this.city).subscribe(value => {
    //   this.weather = value;
    // });
  }

}
