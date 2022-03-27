import React, { Component } from "react"

class Calculator extends Component {
  // Declare state variables
  constructor() {
    super()
    this.state = {
      firstNum: "",
      secondNum: "",
      operator: null,
      sum: "",
    }
  }

  clickedNum = (e) => {
    let display = document.getElementsByClassName("answer-box")
    if (this.state.operator === null) {
      this.setState({
        firstNum: this.state.firstNum + e.target.innerText,
        display: this.state.firstNum,
      })
    } else if (this.state.operator !== null) {
      this.setState({
        secondNum: this.state.secondNum + e.target.innerText,
      })
    }
  }

  clickedOp = (e) => {
    this.setState({
      operator: e.target.innerText,
    })
  }

  calcSum = (e) => {
    this.setState({
      sum: eval(
        parseInt(this.state.firstNum) +
          this.state.operator +
          parseInt(this.state.secondNum)
      ),
    })
  }

  clearCalc = (e) => {
    this.setState({
      firstNum: "",
      secondNum: "",
      operator: null,
      sum: "",
    })
  }

  render() {
    console.log("firstnum is", this.state.firstNum)
    console.log("secondnum is", this.state.secondNum)
    console.log("our sum is", this.state.sum)
    console.log("Here is our operator", this.state.operator)
    return (
      <div className="container">
        <h1>React Calculator</h1>
        <div className="calc-container">
          <p>Values: </p>
          <div className="answer-box">
            {this.state.firstNum} {this.state.operator} {this.state.secondNum}=
            {this.state.sum}
          </div>
          <div className="calc-row">
            <button
              onClick={this.clearCalc}
              className="calc-button calc-button-top"
            >
              AC
            </button>
            <button className="calc-button calc-button-top">+/-</button>
            <button className="calc-button calc-button-top">%</button>
            <button
              onClick={this.clickedOp}
              className="calc-button calc-button-op"
            >
              /
            </button>
          </div>
          <div className="calc-row">
            <button onClick={this.clickedNum} className="calc-button">
              7
            </button>
            <button onClick={this.clickedNum} className="calc-button">
              8
            </button>
            <button onClick={this.clickedNum} className="calc-button">
              9
            </button>
            <button
              onClick={this.clickedOp}
              className="calc-button calc-button-op"
            >
              *
            </button>
          </div>
          <div className="calc-row">
            <button onClick={this.clickedNum} className="calc-button">
              4
            </button>
            <button onClick={this.clickedNum} className="calc-button">
              5
            </button>
            <button onClick={this.clickedNum} className="calc-button">
              6
            </button>
            <button
              onClick={this.clickedOp}
              className="calc-button calc-button-op"
            >
              -
            </button>
          </div>
          <div className="calc-row">
            <button onClick={this.clickedNum} className="calc-button">
              1
            </button>
            <button onClick={this.clickedNum} className="calc-button">
              2
            </button>
            <button onClick={this.clickedNum} className="calc-button">
              3
            </button>
            <button
              onClick={this.clickedOp}
              className="calc-button calc-button-op"
            >
              +
            </button>
          </div>
          <div className="calc-row">
            <button onClick={this.clickedNum} className="calc-button width-2">
              0
            </button>
            <button className="calc-button">.</button>
            <button
              onClick={this.calcSum}
              className="calc-button calc-button-op"
            >
              =
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator
