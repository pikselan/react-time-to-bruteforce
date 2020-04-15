import React, { Component } from 'react'
import './App.css';
const calcBrute = require('./calcBrute');

interface State {
  password: string;
  time: number;
}

interface Event {
  target: { name: string; value: string; }
}

class App extends Component {
  state: State = {
    password: "",
    time: 0
  }

  handleChange = (e: Event) => {
    this.setState({ 
      [e.target.name] : e.target.value,
      time : calcBrute.calculateBruteforceTime(e.target.value)
     });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Time To Bruteforce your Password</h1>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
          <h4> Password : {this.state.password} </h4>
          <h4> Time : {this.state.time} </h4>
        </header>
      </div>
    )
  }
}

export default App;
