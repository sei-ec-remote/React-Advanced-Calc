import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        display: 0,
        operator: '',
        memNum: 0
    }

    allClear = () => {
        this.setState({
            display: 0,
            operator: '',
            memNum: 0  
        })
    }

    decimal = () => {
        if (!this.state.display.includes('.')) {
                      this.setState(
                {display : `${this.state.display}.`}
            )  
        }
    }

    makeNeg = () => {
        this.setState ({
            display: parseFloat(this.state.display) * -1
        })
    }

    doPercent = () => {
        let result = 0
        const opp = this.state.operator
        const num1 = parseFloat(this.state.memNum)
        const num2 = (parseFloat(this.state.display)/100) * num1
        switch (opp) {
            case '+':
                result = num1 + num2
                break;
            case '-':
                result = num1 - num2
                break;
            case '/':
                result = (num1 / num2) * num1
                break;
            case 'x':
                result = num2
                break;
            default: result = 0
        }
        this.setState({display: result, operator: ''})
    }

    doMath = () => {
        let result = 0
        const opp = this.state.operator
        const num1 = parseFloat(this.state.memNum)
        const num2 = parseFloat(this.state.display)
        switch (opp) {
            case '+':
                result = num1 + num2
                break;
            case '-':
                result = num1 - num2
                break;
            case '/':
                result = num1 / num2
                break;
            case 'x':
                result = num1 * num2
                break;
            default: result = 0
        }
        this.setState({display: result, operator: ''})
    }
    setOpperator = (e) => {
        if (this.state.operator === '') {
            this.setState(
                {
                    operator: e.target.innerText,
                    memNum: this.state.display,
                    display: 0
                }
            )
        } else {
            this.setState(
                {display : 'ERR'}
            )
        }
    }

    setNum = (e) => {

        if (this.state.display === 'ERR') {
            this.setState(
                {display : 0 }
            )
        }
        const num = parseFloat(e.target.innerText)

        if (num + this.state.display !== 0) {
            this.setState(
                {display : `${this.state.display === 0? '' : this.state.display}${num}`}
            )
        }
    }

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.display}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={this.allClear}>AC</button>
                    <button className="calc-button calc-button-top" onClick={this.makeNeg}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={this.doPercent}>%</button>
                    <button className="calc-button calc-button-op" onClick={this.setOpperator}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.setNum}>7</button>
                    <button className="calc-button" onClick={this.setNum}>8</button>
                    <button className="calc-button"onClick={this.setNum}>9</button>
                    <button className="calc-button calc-button-op" onClick={this.setOpperator}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.setNum}>4</button>
                    <button className="calc-button" onClick={this.setNum}>5</button>
                    <button className="calc-button" onClick={this.setNum}>6</button>
                    <button className="calc-button calc-button-op" onClick={this.setOpperator}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.setNum}>1</button>
                    <button className="calc-button" onClick={this.setNum}>2</button>
                    <button className="calc-button" onClick={this.setNum}>3</button>
                    <button className="calc-button calc-button-op" onClick={this.setOpperator}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={this.setNum}>0</button>
                    <button className="calc-button" onClick={this.decimal}>.</button>
                    <button className="calc-button calc-button-op" onClick={this.doMath}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator