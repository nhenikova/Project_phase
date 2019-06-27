import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, catchError, first } from 'rxjs/operators';
import { CityDto } from '../models/CityDto';
import { ForecastDto } from '../models/ForecastDto';

@Injectable({ providedIn: 'root' })
export class OpenWeatherAPI {

    private apiUrl = 'http://api.openweathermap.org/data/2.5/';
    private metricKeyParam = '&units=metric';
    private apiKeyParam = '&APPID=50052f3a89d319788df549fe8d835d8d';
    // http://api.openweathermap.org/data/2.5/weather?q=London&APPID=50052f3a89d319788df549fe8d835d8d


    constructor(private http: HttpClient) { }

    async getActualWeatherForCity2(cityName: string): Promise<CityDto> {
        const response = await fetch(`${this.apiUrl}weather?q=${cityName}&${this.metricKeyParam}${this.apiKeyParam}`);
        return await response.json();
    }
    // OR 
    getActualWeatherForCity(cityName: string): Observable<CityDto> {
        let serviceUrl = `${this.apiUrl}weather?q=${cityName}${this.metricKeyParam}${this.apiKeyParam}`;
        return this.http.get<CityDto>(serviceUrl)
            .pipe(
                tap(value => this.log(`fetched ${serviceUrl}`, value)),
                catchError(err => of(null)),
                first()
            );
    }

    getForecastForCity(cityId: number): Observable<ForecastDto> {
        let serviceUrl = `${this.apiUrl}forecast?id=${cityId}&cnt=5${this.metricKeyParam}${this.apiKeyParam}`;
        return this.http.get<ForecastDto>(serviceUrl)
            .pipe(
                tap(value => this.log(`fetched ${serviceUrl}`, value)),
                catchError(err => of(null)),
                first()
            );
    }

    // private handleError<T>(operation = 'operation', result?: T) {
    //     return (error: any): Observable<T> => {
    //         console.error(error); // log to console instead
    //         this.log(`${operation} failed: ${error.message}`, null);
    //         return of(result as T);
    //     };
    // }

    private log(message: string, result?: any) {
        console.log(message, result);
    }
}