import React from 'react';

import classes from './TimeWeather.css'
import SmallWeatherInfo from '../smallWeatherInfo/SmallWeatherInfo'

const TimeWeather = (props) => {
  const weatherInfo = props.data.map((el, i) => {
    const active = i === props.active ? 'active' : null;
    return <SmallWeatherInfo selected={props.changedInfo} active={active} data={el} key={i} num={i}/>
  })

  return (
    <div className={classes.TimeWeather}>
      {weatherInfo}
    </div>
  )
}

export default TimeWeather;