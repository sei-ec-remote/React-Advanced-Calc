import React, { Component } from 'react'

class Calculator extends Component {

    state= {
        display: '',
        total: null,
        operator: null,
        readyForNewNum: true
    }

    inputNum = (e) => {
        if(this.state.readyForNewNum) {
            this.setState({
                display: e.target.innerText,
                readyForNewNum: false
            })
        } else {
            this.setState({
                display: this.state.display + e.target.innerText
            })
        }
    }

    setOperator = (e) => {
        if(this.state.display && !this.state.total) {
            let newTotal = this.state.display
            this.setState({
                operator: e.target.innerText,
                readyForNewNum: true,
                total: newTotal
            })
        } else if (this.state.display && this.state.total) {
            let runningTotal = this.operate()
            this.setState({
                total: runningTotal,
                operator: e.target.innerText,
                readyForNewNum: true,
                display: runningTotal
            })
        }
    }

    operate = () => {
        switch(this.state.operator) {
            case '+':
                return parseFloat(this.state.total) + parseFloat(this.state.display)
            case '-':
                return parseFloat(this.state.total) - parseFloat(this.state.display)
            case '/':
                return parseFloat(this.state.total) / parseFloat(this.state.display)
            case '%':
                return parseFloat(this.state.total) % parseFloat(this.state.display)
            case 'x':
                return parseFloat(this.state.total) * parseFloat(this.state.display)
            default:
                console.log('defaulting')
        }
    }

    calculate = () => {
        if(this.state.total) {
            let result = this.operate()
            this.setState({
                display: result,
                readyForNewNum: true,
                total: null
            })
        }
    }

    clearAll = () =>{
        this.setState({
            total: null,
            operator: null,
            display: '',
            readyForNewNum: true
        })
    }

    changeSign = () => {
        if(!this.state.readyForNewNum) {
            this.setState({
                display: this.state.display*(-1)
            })
        } else {
            this.setState({
                display: '-',
                readyForNewNum: false
            })
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
                        <button onClick={this.clearAll} className="calc-button calc-button-top">AC</button>
                        <button onClick={this.changeSign} className="calc-button calc-button-top">+/-</button>
                        <button onClick={this.setOperator} className="calc-button calc-button-top">%</button>
                        <button onClick={this.setOperator} className="calc-button calc-button-op">/</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.inputNum} className="calc-button">7</button>
                        <button onClick={this.inputNum} className="calc-button">8</button>
                        <button onClick={this.inputNum} className="calc-button">9</button>
                        <button onClick={this.setOperator} className="calc-button calc-button-op">x</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.inputNum} className="calc-button">4</button>
                        <button onClick={this.inputNum} className="calc-button">5</button>
                        <button onClick={this.inputNum} className="calc-button">6</button>
                        <button  onClick={this.setOperator} className="calc-button calc-button-op">-</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.inputNum} className="calc-button">1</button>
                        <button onClick={this.inputNum} className="calc-button">2</button>
                        <button onClick={this.inputNum} className="calc-button">3</button>
                        <button onClick={this.setOperator} className="calc-button calc-button-op">+</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.inputNum} className="calc-button width-2">0</button>
                        <button onClick={this.inputNum} className="calc-button">.</button>
                        <button onClick={this.calculate} className="calc-button calc-button-op">=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator
