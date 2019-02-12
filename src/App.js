import React, { Component } from 'react';

import classes from './App.css'
import Spinner from './components/Spinner/Spinner'
import WeatherDayInfo from './components/WeatherDayInfo/WeatherDayInfo';
import TimeWeather from './components/TimeWeather/TimeWeather'

const keyID = '45109c13b337c1d1c93d4933cfacb596';

class App extends Component {
  state = {
    data: null,
    shownInfo: 0,
  };

  getPosition(options) {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  getLocalWeather = async () => {
    const position = await this.getPosition();
    const coords = await position.coords;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&APPID=${keyID}&units=metric&lang=ru`
    );
    const data = await res.json();
    this.setState({
      data: data
    })
  };

  componentDidMount() {

    this.getLocalWeather();

    /*this.getPosition()
      .then(location => location.coords)
      .then(coords => {
        return fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&APPID=${keyID}&units=metric&lang=ru`
        );
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data
        })
      })*/
  }

  changeShownInfoHandler(num) {
    this.setState({
      shownInfo: num
    })
  }

  render() {
    let info = <Spinner/>;

    if (this.state.data) {
      const timeDayWeather = this.state.data.list.filter((v, i) => {
        if (i < 5) {
          return true
        } else {
          return false
        }
      });

      info = (
        <>
          <WeatherDayInfo data={this.state.data.list[this.state.shownInfo]}/>
          <TimeWeather changedInfo={(num) => {this.changeShownInfoHandler(num)}} active={this.state.shownInfo} data={timeDayWeather}/>
        </>
      )
    }

    return (
      <div className={classes.App}>
        {info}
      </div>
    );
  }
}

export default App;
