import React, { Component } from "react";
const OPERATIONS = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  "%": (a) => a / 100,
  "±": (a) => a * -1,
};

class Calculator extends Component {
  // Declare state variables
  state = {
    input: "",
    stored: "",
    result: 0,
    operator: "",
  };

  setNum = (e) => {
    console.log(e.target.value)
    if (e.target.value === "0"){
      if(this.state.input.length){
        this.setState({ input: `${this.state.input}` + `${e.target.value}` });
      } else {return}
    } else {this.setState({ input: `${this.state.input}` + `${e.target.value}` });}
    
    console.log(this.state);
  };

  reset = (e) => {
    this.setState({ input: "", stored: "suh dude" });
  };

  add = () => {
    this.setState({ operator: "+", stored: this.state.input, input: "" });
  };

  sub = (e) => {
    this.setState({ operator: "-", stored: this.state.input, input: "" });
  };

  mul = () => {
    this.setState({ operator: "*", stored: this.state.input, input: "" });
  };

  div = () => {
    this.setState({ operator: "/", stored: this.state.input, input: "" });
  };

  lol = () => {
    let test = parseInt(this.state.input);
    console.log(typeof this.state.input)
        if (Math.abs(test) > 0 ){
      this.setState({ input: this.state.input + "0" });
        }
  };
  equal = (e) => {
    let total = null;
    
    if (this.state.operator === "+") {
      total = parseInt(this.state.stored) + parseInt(this.state.input);
      this.setState({ input: total });
    } else if (this.state.operator === "-") {
      total = parseInt(this.state.stored) - parseInt(this.state.input);
      this.setState({ input: total });
    } else if (this.state.operator === "*") {
      total = parseInt(this.state.stored) * parseInt(this.state.input);
      this.setState({ input: total });
    } else if (this.state.operator === "/") {
      total = parseInt(this.state.stored) / parseInt(this.state.input);
      this.setState({ input: total });
    } else if (this.state.input === NaN){
      console.log('suh')
      this.setState({ input: 0 });
    }
    
  };

  render() {
    return (
      <div className="container">
        <h1>React Calculator</h1>
        <div className="calc-container">
          <p>Values: </p>
          <div className="answer-box">{this.state.input}</div>
          <div className="calc-row">
            <button
              onClick={(e) => this.reset(e, "input")}
              className="calc-button calc-button-top"
            >
              AC
            </button>
            <button className="calc-button calc-button-top">+/-</button>
            <button className="calc-button calc-button-top">%</button>
            <button
              onClick={(e) => this.div(e, "input")}
              className="calc-button calc-button-op"
            >
              /
            </button>
          </div>
          <div className="calc-row">
            <button
              onClick={(e) => this.setNum(e, "input")}
              value="7"
              className="calc-button"
            >
              7
            </button>
            <button
              onClick={(e) => this.setNum(e, "input")}
              value="8"
              className="calc-button"
            >
              8
            </button>
            <button
              onClick={(e) => this.setNum(e, "input")}
              value="9"
              className="calc-button"
            >
              9
            </button>
            <button
              onClick={(e) => this.mul(e, "input")}
              className="calc-button calc-button-op"
            >
              x
            </button>
          </div>
          <div className="calc-row">
            <button
              onClick={(e) => this.setNum(e, "input")}
              value="4"
              className="calc-button"
            >
              4
            </button>
            <button
              onClick={(e) => this.setNum(e, "input")}
              value="5"
              className="calc-button"
            >
              5
            </button>
            <button
              onClick={(e) => this.setNum(e, "input")}
              value="6"
              className="calc-button"
            >
              6
            </button>
            <button
              onClick={(e) => this.sub(e, "input")}
              className="calc-button calc-button-op"
            >
              -
            </button>
          </div>
          <div className="calc-row">
            <button
              onClick={(e) => this.setNum(e, "input")}
              value="1"
              className="calc-button"
            >
              1
            </button>
            <button
              onClick={(e) => this.setNum(e, "input")}
              value="2"
              className="calc-button"
            >
              2
            </button>
            <button
              onClick={(e) => this.setNum(e, "input")}
              value="3"
              className="calc-button"
            >
              3
            </button>
            <button
              onClick={() => this.add()}
              className="calc-button calc-button-op"
            >
              +
            </button>
          </div>
          <div className="calc-row">
            <button value={0} onClick={(e) => this.setNum(e, "input")} className="calc-button width-2">
              0
            </button>
            <button className="calc-button">.</button>
            <button
              onClick={() => this.equal()}
              className="calc-button calc-button-op"
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
