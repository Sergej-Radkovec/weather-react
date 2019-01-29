import React, { Component } from 'react';

class App extends Component {
  state = {
    city: ''
  };

  selectCityHandler() {

  }

  render() {
    let output = null;
    if (this.state.city) {
      output = <p>Погода</p>
    } else {
      output =
        <div>
          <p>Вы не выбрали город</p>
          <button onClick={this.selectCityHandler.bind(this)}>Выбрать</button>
        </div>
    }

    return (
      <div className="App">
        {output}
      </div>
    );
  }
}

export default App;
