import React from 'react';

import classes from './WeatherDayInfo.css'

const WeatherDayInfo = (props) => {
    return (
      <div className={classes.WeatherDayInfo}>
          <div className={classes.short}>
              <div className={classes.temp}>{props.data.main.temp} C</div>
              <img src={`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`} alt="icon"/>
              <div>{props.data.weather[0].description}</div>
          </div>
          <div className={classes.full}>
              <div>Ветер: {props.data.wind.speed} м/с</div>
              <div>Давление: {(props.data.main.pressure * 0.750062).toFixed(0)} мм.рт.ст.</div>
              <div>Влажность: {props.data.main.humidity}%</div>
          </div>
      </div>
    )
};

export default WeatherDayInfo;