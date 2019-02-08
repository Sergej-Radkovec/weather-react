import React from 'react';

import classes from './SmallWeatherInfo.css'

const SmallWeatherInfo = (props) => {
  const time = new Date(props.data.dt * 1000);
  return (
    <div onClick={() => {props.selected(props.num)}} className={[classes.SmallWeatherInfo, classes[props.active]].join(' ')}>
      <div className="temp">{props.data.main.temp} C</div>
      <img src={`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`} alt="icon" />
      <div>{time.getUTCHours()}:00</div>
    </div>
  )
};

export default SmallWeatherInfo;