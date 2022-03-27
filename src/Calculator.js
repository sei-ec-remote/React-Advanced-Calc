import React, { Component } from 'react'
import CalculatorRow from './CalculatorRow.js'

export default class Calculator extends Component {
    constructor()
    {
        super()
        // Declare state variables
        this.state = {
            result: ''
        }
    }

    /**************** METHODS *****************/
    // AC Button - Clear the State (numbers and operations)
    allClear = () => {
        this.setState({
            result: ''
        })
    } 

    // When button is clicked, concatenate what was clicked to 'result' in state
    clickButton = (e) => {
        let buttonClicked = e.target.innerText
        this.setState( (prevState) => {
            return {
                result: prevState.result + buttonClicked
            }
        })
    }

    // Will calculate the result of 2 inputs when = sign is clicked
    calculate = () => {
        try
        {
            this.setState({
                result: eval(this.state.result)
            })
        }
        catch
        {
            this.setState({
                result: 'Invalid Math Operation'
            })
        }
    }

    render(){
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <div className="answer-box">{this.state.result}</div>
                    <CalculatorRow inputs={['AC','+/-','%','/']} clickButton={this.clickButton} clear={this.allClear} />
                    <CalculatorRow inputs={['7','8','9','*']} clickButton={this.clickButton} />
                    <CalculatorRow inputs={['4','5','6','-']} clickButton={this.clickButton} />
                    <CalculatorRow inputs={['1','2','3','+']} clickButton={this.clickButton} />
                    <CalculatorRow inputs={['0','.','=']} clickButton={this.clickButton} calculate={this.calculate}/>
                </div>
            </div>
        )
    }
}
