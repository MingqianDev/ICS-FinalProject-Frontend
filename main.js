import { displayCurrentWeather } from './display/displayCurrentWeather.js';
import { displayDailyWeather } from './display/displayDailyWeather.js';
import { getData } from './getData.js';

const data = getData();
displayCurrentWeather(data);
displayDailyWeather(data);
