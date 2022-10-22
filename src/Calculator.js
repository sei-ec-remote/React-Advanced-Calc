import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        num1: '',
        num2: '',
        operator: '',
        currentNum: 1,
        input: ''
    }

    allClear = () => {
        this.setState({
            num1: '',
            num2: '',
            operator: '',
            currentNum: 1,
            input: '0'
        })
    }

    storeOperator = (e) => {
        this.setState({
            operator: e.target.innerText,
            currentNum: 2,
            input: ''
        })
    }

    storeNum = (e) => {
        if(this.state.currentNum === 1){
            if(this.state.num1 === '' && e.target.innerText === '.'){
                this.setState({
                    num1: '0.',
                    input: '0.'
                })
            } else if(!(this.state.num1 === '' && e.target.innerText === '0')){
                this.setState({
                    num1: this.state.num1.concat(e.target.innerText),
                    input: this.state.input.concat(e.target.innerText)
                })
            }
        } else {
            if(this.state.num2 === '' && e.target.innerText === '.'){
                this.setState({
                    num2: '0.',
                    input: '0.'
                })
            } else if(!(this.state.num2 === '' && e.target.innerText === '0')){
                this.setState({
                    num2: this.state.num2.concat(e.target.innerText),
                    input: this.state.input.concat(e.target.innerText)
                })
            }
        }
    }

    math = {
        '+': function (x, y) { return x + y },
        '-': function (x, y) { return x - y },
        'x': function (x, y) { return x * y },
        '%': function (x, y) { return x % y }
    }

    equals = () => {
        if(this.state.operator !== ''){
            let total = this.math[this.state.operator](+this.state.num1, +this.state.num2)
            this.setState({
                num1: `${total}`,
                num2: '',
                operator: '',
                currentNum: 1,
                input: `${total}`
            })
        }
    }



render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                {/* Not really sure what this is for so I removed it */}
                {/* <p>Values: </p> */}
                <div className="answer-box">{this.state.input}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={this.allClear}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top" onClick={this.storeOperator}>%</button>
                    <button className="calc-button calc-button-op" onClick={this.storeOperator}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.storeNum}>7</button>
                    <button className="calc-button" onClick={this.storeNum}>8</button>
                    <button className="calc-button" onClick={this.storeNum}>9</button>
                    <button className="calc-button calc-button-op" onClick={this.storeOperator}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.storeNum}>4</button>
                    <button className="calc-button" onClick={this.storeNum}>5</button>
                    <button className="calc-button" onClick={this.storeNum}>6</button>
                    <button className="calc-button calc-button-op" onClick={this.storeOperator}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.storeNum}>1</button>
                    <button className="calc-button" onClick={this.storeNum}>2</button>
                    <button className="calc-button" onClick={this.storeNum}>3</button>
                    <button className="calc-button calc-button-op" onClick={this.storeOperator}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={this.storeNum}>0</button>
                    <button className="calc-button" onClick={this.storeNum}>.</button>
                    <button className="calc-button calc-button-op" onClick={this.equals}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator