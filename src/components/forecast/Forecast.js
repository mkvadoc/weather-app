import React from "react";
import moment from "moment";

export const Forecast = ({ cityForecast }) => {
  const dailyForecast = cityForecast.list.filter((dailyForecast) => {
    return (
      dailyForecast.dt_txt.includes("12:00:00") &&
      moment(dailyForecast.dt_txt).isBetween(moment(), moment().add(3, "days"))
    );
  });

  return (
    <div className="Forecast">
      {dailyForecast.map((dayData, id) => {
        return (
          <div key={id} className="day">
            <img
              className="weather_icon"
              src={`/icons/${dayData.weather[0]?.icon}.svg`}
              alt={dayData.weather[0]?.icon}
            />
            <div className="day_date">
              {moment(dayData.dt * 1000).format("ddd, DD")}{" "}
            </div>
            <div className="day_Temp">
              <div className="maxTemp">
                {Math.round(dayData.main?.temp_max)}°C ↑
              </div>
              <div className="minTemp">
                {Math.round(dayData.main?.temp_min)}°C ↓
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
