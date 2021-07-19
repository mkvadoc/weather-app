import React from "react";

export const Climate = ({ weatherStatus = {} }) => {
  return (
    <div className="climate">
      <div className="climate_item">
        <img src="/images/027-humidity.png" alt="img_humidity" />
        <div className="climate">{weatherStatus.main?.humidity}%</div>
        <div className="climate_name">Humidity</div>
      </div>
      <div className="climate_item">
        <img src="/images/050-barometer.png" alt="img_barometer" />
        <div className="climate"> {weatherStatus.main?.pressure}mBar</div>
        <div className="climate_name">Pressure</div>
      </div>
      <div className="climate_item">
        <img src="/images/001-wind-1.png" alt="img_wind" />
        <div className="climate">
          {Math.floor(weatherStatus.wind?.speed * 3.6)}km/h
        </div>
        <div className="climate_name">Wind</div>
      </div>
    </div>
  );
};

export default Climate;
