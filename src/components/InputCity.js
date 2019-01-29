import React, {Component} from 'react';

class InputCity extends Component{
  state = {
    value: 'Enter your city'
  };

  inputChangedHandler(e) {
    this.setState({
      value: e.target.value
    })
  };

  render() {
    return (
      <form onSubmit={this.props.submit}>
        <input onChange={this.inputChangedHandler.bind(this)} type='text' value={this.state.value}/>
        <button type='submit'>Add city</button>
      </form>
    )
  }
}

export default InputCity;