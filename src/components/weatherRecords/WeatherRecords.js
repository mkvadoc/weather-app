import React from "react";

export const WeatherRecords = ({ weatherStatus = {} }) => {
  return (
    <div className="weatherRecords">
      <div className="weather_item">
        <img
          className="weather_icon"
          src={`/icons/${weatherStatus.weather[0]?.icon}.svg`}
          alt={weatherStatus.weather[0]?.icon}
        />
        <div className="weather_status">
          {weatherStatus.weather[0]?.description}
        </div>
      </div>
      <div className="weather_item_temp">
        <div className="weather_number">
          {Math.round(weatherStatus.main?.temp)}{" "}
        </div>
        <div className="weather_value">°C</div>
      </div>
      <div className="weather_item">
        <div className="weather_temp">
          {Math.round(weatherStatus.main?.temp_max)}°C ↑
        </div>
        <div className="weather_temp">
          {Math.round(weatherStatus.main?.temp_min)}°C ↓
        </div>
      </div>
    </div>
  );
};

export default WeatherRecords;
