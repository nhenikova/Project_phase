import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cities: string[] = []; //add cities
  newCity: string = '';
  localStorageKey: string = 'weather-app-cities';

  constructor() { }

  ngOnInit() {
    console.log(this.cities);
    this.cities = this.getFromLocalStorage();
  }

  addNewCity() {
    this.cities.push(this.newCity);
    this.newCity = '';
    this.setToLocalStorage();
  }

  getFromLocalStorage(): string[]{
    try {
      const citiesAsString = localStorage.getItem(this.localStorageKey);
      return citiesAsString.split(',');
    } catch (error) {
      return [];
    }
  }

  setToLocalStorage() {
    localStorage.setItem(this.localStorageKey, this.getCitiesAsString());
  }

  getCitiesAsString() {
    // this.cities.join(',');
    
    // for(city of cities) {
    // }

    let result = '';
    for (let index = 0; index < this.cities.length; index++) {
      const element = this.cities[index];
      result += element;
      if (index < this.cities.length - 1) {
        result += ',';
      }
    }
    return result;
  }

}
