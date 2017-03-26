import axios from 'axios';

const API_KEY = '0380ce9795e07a8a302c0b7adb75915a';
//es6 string interpolation-- tempalte strings
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},IN`;
  const request = axios.get(url);
  return {
    type : FETCH_WEATHER,
    payload : request
  };
}
