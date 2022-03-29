
import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    constructor(){
        super()
        this.state = {
            num1: [],
            operator: ' ',
            num2: [],
            sum: null 
        }
        console.log(this.state)

    }


//this function is called when each button with a number is clicked 
    numInput = (e) =>{
    let numClick = e.target.innerText
    this.setState({
        num1: [...this.state.num1, numClick],
        num2: [...this.state.num2, numClick],

    })
        
    }
    opInput = (e) =>{
        let opClick = e.target.innerText
        this.setState({
        operator: opClick
    
        })
            
        }

   
            





render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>

                </p>


                <div className="answer-box">{this.state.num1} {this.state.operator} {this.state.num2} </div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick={this.opInput}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.numInput}>7</button>
                    <button className="calc-button" onClick={this.numInput}>8</button>
                    <button className="calc-button" onClick={this.numInput}>9</button>
                    <button className="calc-button calc-button-op" onClick={this.opInput}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.numInput}>4</button>
                    <button className="calc-button" onClick={this.numInput}>5</button>
                    <button className="calc-button" onClick={this.numInput}>6</button>
                    <button className="calc-button calc-button-op" onClick={this.opInput}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.numInput}>1</button>
                    <button className="calc-button" onClick={this.numInput}>2</button>
                    <button className="calc-button" onClick={this.numInput}>3</button>
                    <button className="calc-button calc-button-op" onClick={this.opInput}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={this.numInput}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick={this.addNum}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator