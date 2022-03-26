import React, { Component } from 'react'
import CalculatorRow from './CalculatorRow.js'

export default class Calculator extends Component {
    constructor()
    {
        super()
        // Declare state variables
        this.state = {
            operator: "",
            number: 0,
            result: 0
        }
    }

    // AC Button - Clear the State (numbers and operations)
    allClear = () => {

    }

    // When you click on a number, change the state to the number clicked
    clickNumber = (e) => {
        console.log('A number button was clicked', e.target.innerText)
    }   

    // When you click on an operation, change the state to the operator clicked
    clickOperation = (e) => {
        console.log('An operation button was clicked', e.target.innerText)
    }

    render(){

        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    <div className="answer-box">TBD</div>
                    <CalculatorRow inputs={['AC','+/-','%','/']} operationBtn={this.clickOperation} />
                    <CalculatorRow inputs={['7','8','9','x']} numberBtn={this.clickNumber} operationBtn={this.clickOperation} />
                    <CalculatorRow inputs={['4','5','6','-']} numberBtn={this.clickNumber} operationBtn={this.clickOperation} />
                    <CalculatorRow inputs={['1','2','3','+']} numberBtn={this.clickNumber}  operationBtn={this.clickOperation} />
                    <CalculatorRow inputs={['0','.','=']} numberBtn={this.clickNumber} />
                </div>
            </div>
        )
    }
}
