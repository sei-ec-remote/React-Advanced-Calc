
import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    constructor(){
        super()
        this.state = {
            num1: [],
            operator: '',
            num2: [],
            sum: null, 
            equal: ''
        }
        console.log(this.state)

    }


//this function is called when each button with a number is clicked 
    numInput = (e, num1) =>{
    let numClick = parseInt(e.target.innerText)
    console.log("this is num1", this.state.num1)
    if(this.state.operator === '') {
        this.setState({
            num1: [...this.state.num1, numClick],
        })
    
    } else {   
        this.setState({
        num2: [...this.state.num2, numClick],
    })
    
    }
        
    }

    
    opInput = (e) =>{
        let opClick = e.target.innerText
        this.setState({
        operator:opClick
    
        })
            
        }


    clearInput = (e) =>{
        
            this.setState({
            num1: [],
            operator: '',
            num2: [],
        
            })
                
            }

    sumInput = (e) => { 
        let sumClick = parseInt(e.target.innerText)
        let numVal1 = parseFloat(this.state.num1.join(''))
        let numVal2 = parseFloat(this.state.num2.join(''))
        let eq = "="
            if(this.state.operator == '+') {
                this.setState({
                    sum: numVal1 + numVal2,
                    equa: this.state.eq
            
                })
            }
        }
        
        
        
        
        
        
        
    render(){
    console.log("this is sum input", this.state.sum)
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>

                </p>

                


                <div className="answer-box">{this.state.num1}{this.state.operator} {this.state.num2} {this.state.eqqals}{this.state.sum}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={this.clearInput}>AC</button>
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
                    <button className="calc-button calc-button-op" onClick={this.sumInput}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator