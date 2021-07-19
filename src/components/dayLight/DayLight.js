import React from 'react';
import moment from 'moment';

export const DayLight = ({weatherStatus={}}) => {
const sunset = (weatherStatus.sys?.sunset)
const sunrise= (weatherStatus.sys?.sunrise)
const daylight= (sunset-sunrise)

    return (
      <div className="dayTime"> 
        <div className="time_item">
          <img src="/images/008-sunrise.png" alt="sunrise"/>
          <div className="time">{moment(weatherStatus.sys?.sunrise * 1000).format('LT')}</div>
          <div className="time_name">Sunrise</div>
        </div>
        <div className="time_item">
          <img src="/images/007-sunset.png" alt="sunset"/>   
          <div className="time">{moment(weatherStatus.sys?.sunset * 1000).format('LT')}</div>
          <div className="time_name">Sunset</div> 
        </div> 
        <div className="time_item">
          <img src="/images/sand-clock.png" alt="sandClock"/>
          <div className="time">{moment(daylight * 1000).utcOffset('-0000').format('H:mm')}</div>
          <div className="time_name">Daytime</div> 
        </div>
      </div>
    )
}

export default DayLight;
