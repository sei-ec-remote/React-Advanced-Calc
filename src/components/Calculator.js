import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state ={
        add: '+',
        subtract: '-',
        multiply: '*',
        divide: '/',
        num1: 1,
        num2: 2,
        num3: 3,
        num4: 4,
        num5: 5,
        num6: 6,
        num7: 7,
        num8: 8,
        num9: 9,
        num0: 0,
        input1: [],
       results: ''
    }

inputValue = (e)=>{
    const value = e.target.innerText
    console.log (value)
    this.setState({
        input1: [
            ...this.state.input1,
            value
        ]
    })
}

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.input1}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick = {this.inputValue} > {this.state.divide} </button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick = {this.inputValue} > {this.state.num7} </button>
                    <button className="calc-button" onClick = {this.inputValue} > {this.state.num8} </button>
                    <button className="calc-button" onClick = {this.inputValue} > {this.state.num9} </button>
                    <button className="calc-button calc-button-op" onClick = {this.inputValue} > {this.state.multiply} </button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick = {this.inputValue} > {this.state.num4} </button>
                    <button className="calc-button" onClick = {this.inputValue} > {this.state.num5} </button>
                    <button className="calc-button" onClick = {this.inputValue} > {this.state.num6} </button>
                    <button className="calc-button calc-button-op" onClick = {this.inputValue} > {this.state.subtract} </button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick = {this.inputValue} > {this.state.num1} </button>
                    <button className="calc-button" onClick = {this.inputValue} > {this.state.num2} </button>
                    <button className="calc-button" onClick = {this.inputValue} > {this.state.num3} </button>
                    <button className="calc-button calc-button-op" onClick = {this.inputValue} > {this.state.add} </button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick = {this.inputValue} > {this.state.num0} </button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator