import React, { Component } from "react";
import prettyMilliseconds from "pretty-ms";
import "./App.css";

const config = {
  calcPerSec: 10e9,
  tests: [
    {
      title: "Lowercase characters",
      regex: /[a-z]/,
      addsPossibilities: 26,
    },
    {
      title: "Uppercase characters",
      regex: /[A-Z]/,
      addsPossibilities: 26,
    },
    {
      title: "Numbers",
      regex: /[0-9]/,
      addsPossibilities: 10,
    },
    {
      title: "Special characters",
      regex: /[!@#$%^&*(\\)\-_=+[{ \]};:'"|`~,<.>/? ]/,
      addsPossibilities: 33,
    },
  ],
};

interface State {
  password: string;
  time: number;
  timeFormat: string;
}

interface Event {
  target: { name: string; value: string };
}

class App extends Component {
  state: State = {
    password: "",
    time: 0,
    timeFormat: ""
  };

  calcPossibilitiesPerCharacter = (password: string) => {
    let possibilities: number = 0;
    config.tests.forEach((test) => {
      if (password.match(test.regex) != null) {
        // console.log(test.title);
        possibilities += test.addsPossibilities;
      }
    });
    return possibilities;
  };

  calcBruteforceTime = (password: string) => {
    let possibilities: number = this.calcPossibilitiesPerCharacter(password);
    return Math.pow(possibilities, password.length) / config.calcPerSec;
  };

  handleChange = (e: Event) => {
    this.setState({
      [e.target.name]: e.target.value,
      time: this.calcBruteforceTime(e.target.value),
      timeFormat: prettyMilliseconds((this.calcBruteforceTime(e.target.value))*1000, {verbose: true})
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Time To Bruteforce your Password</h1>
          <h3>Make sure your password is the best</h3>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          ></input>
          <h4> Password : {this.state.password} </h4>
          {/* <h4> {`Time : ${this.state.time} second`} </h4> */}
          <h4> Takes <span>{this.state.timeFormat}</span> to bruteforce </h4>
        </header>

        <footer>by <a href="https://github.com/pikselan">Pikselan</a></footer>
      </div>
    );
  }
}

export default App;
