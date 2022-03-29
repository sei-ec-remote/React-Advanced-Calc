
import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    constructor(){
        super()
        this.state = {
            num1: null,
            operator: ' ',
            num2: null,
            sum: null 
        }
        console.log(this.state)

    }


//num1 add function 
    addNum = (e) =>{
    let numClick = e.target.innerText
    console.log(numClick)
        
    }


//num 2 add funtion 

//clear function 





render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>

                </p>


                <div className="answer-box">{this.state.num1}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.addNum}>7</button>
                    <button className="calc-button" onClick={this.addNum}>8</button>
                    <button className="calc-button" onClick={this.addNum}>9</button>
                    <button className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.addNum}>4</button>
                    <button className="calc-button" onClick={this.addNum}>5</button>
                    <button className="calc-button" onClick={this.addNum}>6</button>
                    <button className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.addNum}>1</button>
                    <button className="calc-button" onClick={this.addNum}>2</button>
                    <button className="calc-button" onClick={this.addNum}>3</button>
                    <button className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={this.addNum}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator