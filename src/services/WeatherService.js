import api from '../axios';

let i = 0;

export class WeatherService {
  
  static getCurrentWeather(city) {
    if (api) {
      i++;
      if (i > 1)
        return console.log('Остановка запросов');
    }
    return api.get(`/weather?q=${city}`);
  }
}

