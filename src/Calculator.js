import React, { Component } from 'react'
import CalculatorRow from './CalculatorRow.js'

export default class Calculator extends Component {
    constructor()
    {
        super()
        // Declare state variables
        this.state = {
            operator: "",
            num1: '0',
            num2: '0',
            result: 0
        }
    }

    /**************** METHODS *****************/
    // AC Button - Clear the State (numbers and operations)
    allClear = () => {
        this.setState({
            operator: "",
            num1: '0',
            num2: '0',
            result: 0
        })
    }

    // When you click on a number, change the state to the number clicked
    clickNumber = (e) => {
        if(this.state.operator === "")
        {
            let numberClicked = e.target.innerText
            this.setState( (prevState) => {
                return {num1: prevState.num1 + numberClicked}
            })
        }
        else
        {
            let numberClicked = e.target.innerText
            this.setState( (prevState) => {
                return {num2: prevState.num2 + numberClicked}
            })
        }
    }   

    // When you click on an operation, change the state to the operator clicked
    clickOperation = (e) => {
        console.log('An operation button was clicked', e.target.innerText)
        let operationClicked = e.target.innerText
        this.setState({
            operator: operationClicked
        })
    }

    render(){
        console.log('This is number 1: ', this.state.num1)
        console.log('This is number 2: ', this.state.num2)
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    <div className="answer-box">{this.state.num1}</div>
                    <CalculatorRow inputs={['AC','+/-','%','/']} operationBtn={this.clickOperation} clear={this.allClear} />
                    <CalculatorRow inputs={['7','8','9','x']} numberBtn={this.clickNumber} operationBtn={this.clickOperation} />
                    <CalculatorRow inputs={['4','5','6','-']} numberBtn={this.clickNumber} operationBtn={this.clickOperation} />
                    <CalculatorRow inputs={['1','2','3','+']} numberBtn={this.clickNumber}  operationBtn={this.clickOperation} />
                    <CalculatorRow inputs={['0','.','=']} numberBtn={this.clickNumber} />
                </div>
            </div>
        )
    }
}
