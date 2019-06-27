import { Coord, Weather, Clouds, Wind } from './CityDto';

export type City = {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    timezone: number;
};

export class DayForecast {
    dt: number;
    main: Main;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    rain: Rain;
    sys: Sys;
    dt_txt: Date;
}

export class Main {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

export class Rain {
    h: number;
}

export class Sys {
    pod: string;
}

export class ForecastDto {
    cod: string;
    message: string;
    cnt: number;
    city: City;
    list: DayForecast[];
}