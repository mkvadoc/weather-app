import axios from "axios";
import { API } from "constants/index";

export const fetchWeather = (city) => {
    return axios.get(`${API.base}weather?q=${city}&units=metric&APPID=${API.key}`)
}

export const fetchForecast = (city) => {
    return axios.get(`${API.base}forecast?q=${city}&units=metric&APPID=${API.key}`)
}
