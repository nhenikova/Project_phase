export class Coord {
    lon: number;
    lat: number;
}

export class Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export class Main {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
}

export class Wind {
    speed: number;
    deg: number;
}

export class Clouds {
    all: number;
}

export class Sys {
    type: number;
    id: number;
    message: string;
    country: string;
    sunrise: number;
    sunset: number;
}

export class CityDto {
    coord: Coord;
    weather: Weather[]; // collections
    base: string;
    visibility: number;
    dt: number;
    timezone: number;
    id: number;
    name: string;
    cod: number;
    main: Main;
    wind: Wind;
    clouds: Clouds;
    sys: Sys;
}