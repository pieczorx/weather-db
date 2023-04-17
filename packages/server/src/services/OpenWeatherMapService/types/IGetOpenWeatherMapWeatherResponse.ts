export interface IGetOpenWeatherMapWeatherResponse {
  coord:      Coord;
  weather:    Weather[];
  base:       string;
  main:       Main;
  visibility: number;
  wind:       Wind;
  clouds:     Clouds;
  dt:         number;
  sys:        Sys;
  id:         number;
  name:       string;
  cod:        number;
}

interface Clouds {
  all: number;
}

interface Coord {
  lon: number;
  lat: number;
}

interface Main {
  temp:     number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

interface Sys {
  type:    number;
  id:      number;
  message: number;
  country: string;
  sunrise: number;
  sunset:  number;
}

interface Weather {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}

interface Wind {
  speed: number;
  deg:   number;
}
