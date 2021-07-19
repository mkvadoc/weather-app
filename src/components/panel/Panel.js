import React, { useState, useEffect } from "react";
import { DEFAULT_CITY } from "constants/index";
import { fetchWeather, fetchForecast } from "actions/index";
import SearchModal from "components/searchModal/SearchModal";
import moment from "moment";
import { DEFAULT_DATE_FORMAT } from "constants/index";
import WeatherRecords from "components/weatherRecords/WeatherRecords";
import Climate from "components/climate/Climate";
import DayLight from "components/dayLight/DayLight";
import Forecast from "components/forecast/Forecast";

export const Panel = () => {
  const [city, setCity] = useState(DEFAULT_CITY);
  const [weatherStatus, setWeatherStatus] = useState([]);
  const [cityForecast, setCityForecast] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const date = moment().format(DEFAULT_DATE_FORMAT);

  useEffect(() => {
    fetchWeather(city).then(({ data }) => {
      setWeatherStatus([data]);
    });
    fetchForecast(city).then(({ data }) => {
      setCityForecast([data]);
    });
  }, [city]);

  const closeModal = () => setModalIsOpen(false);
  const openModal = () => setModalIsOpen(true);

  return (
    <div className="panel_status">
      <div className="mumbai">
        <div className="date">{date}</div>
        <button onClick={openModal}>
          {city} , Slovakia <i className="fas fa-map-marker-alt"></i>
        </button>
        {modalIsOpen && (
          <SearchModal
            closeModal={closeModal}
            onCityClick={(city) => {
              setCity(city);
            }}
          />
        )}
      </div>

      <div className="weather_display">
        {weatherStatus.map((weatherStatus, id) => {
          return (
            <div key={id} className="weather_status">
              <WeatherRecords weatherStatus={weatherStatus} />
              <Climate weatherStatus={weatherStatus} />
              <DayLight weatherStatus={weatherStatus} />
              {cityForecast.map((cityForecast, id) => {
                return <Forecast key={id} cityForecast={cityForecast} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Panel;
