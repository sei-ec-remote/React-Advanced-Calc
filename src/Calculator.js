import React, { Component } from 'react'

class Calculator extends Component {
    state = {
        firstNum: '',
        secondNum: '',
        operator: '',
        display: '',
        err: ''
    }

    allClear = () => {
        this.setState({
            firstNum: '',
            secondNum: '',
            operator: '',
            display: '',
            err: ''
        })
    }

    handleOperator = event => {
        // react version 16 & earlier (forked from this repo) requires event.persist() to read event properly
        event.persist()
        if (this.state.operator === '' && this.state.firstNum !== '') {
            this.setState({
                operator: event.target.innerText,
            })
        } else if (this.state.operator !== '') {
            this.setState({ err: `No two operators allowed` })
        }
    }


    handleNum = event => {
        event.persist();
        if ((this.state.firstNum === '' && event.target.innerText === '0')
            || (this.state.second === '' && event.target.innerText === '0')) {
            this.setState({ err: `No 0 to start a whole number` })
        } else {
            if (!this.state.operator) {
                if (event.target.innerText === '.' && this.state.firstNum.includes('.')) {
                    this.setState({ err: `Only 1 decimal allowed` })
                } else {
                    this.setState(prev => {
                        return {
                            err: '',
                            firstNum: prev.firstNum + event.target.innerText,
                            display: prev.firstNum + event.target.innerText
                        }
                    })
                }
            } else {
                if (event.target.innerText === '.' && this.state.secondNum.includes('.')) {
                    this.setState({ err: `Only 1 decimal allowed` })
                } else {
                    this.setState(prev => {
                        return {
                            err: '',
                            secondNum: prev.secondNum + event.target.innerText,
                            display: prev.secondNum + event.target.innerText
                        }
                    })
                }
            }
        }
    }


    calculateAnswer = () => {
        let firstNum = parseFloat(this.state.firstNum)
        let secondNum = parseFloat(this.state.secondNum)
        switch (this.state.operator) {
            case '+':
                return firstNum + secondNum
            case '-':
                return firstNum - secondNum
            case 'x':
                return firstNum * secondNum
            case '/':
                return firstNum / secondNum
            default:
                return
        }
    }


    handleCalculation = () => {
        if (this.state.firstNum && this.state.secondNum && this.state.operator) {
            let answer = this.calculateAnswer()
            this.setState({
                display: answer,
                firstNum: answer,
                secondNum: '',
                operator: '',
                err: ''
            })
        } else {
            this.setState({ err: 'Missing number/operator' })
        }
    }


    render() {
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    <div className="answer-box">
                        {this.state.display}<br />
                        {this.state.err}
                    </div>
                    <div className="calc-row">
                        <button className="calc-button calc-button-top" onClick={this.allClear}>AC</button>
                        <button className="calc-button calc-button-top">+/-</button>
                        <button className="calc-button calc-button-top">%</button>
                        <button className="calc-button calc-button-op" onClick={this.handleOperator}>/</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" onClick={(e) => this.handleNum(e)}>7</button>
                        <button className="calc-button" onClick={this.handleNum}>8</button>
                        <button className="calc-button" onClick={this.handleNum}>9</button>
                        <button className="calc-button calc-button-op" onClick={this.handleOperator}>x</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" onClick={this.handleNum}>4</button>
                        <button className="calc-button" onClick={this.handleNum}>5</button>
                        <button className="calc-button" onClick={this.handleNum}>6</button>
                        <button className="calc-button calc-button-op" onClick={this.handleOperator}>-</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" onClick={this.handleNum}>1</button>
                        <button className="calc-button" onClick={this.handleNum}>2</button>
                        <button className="calc-button" onClick={this.handleNum}>3</button>
                        <button className="calc-button calc-button-op" onClick={this.handleOperator}>+</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button width-2" onClick={this.handleNum}>0</button>
                        <button className="calc-button" onClick={this.handleNum}>.</button>
                        <button className="calc-button calc-button-op" onClick={this.handleCalculation}>=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator