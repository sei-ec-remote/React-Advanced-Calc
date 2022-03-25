import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    constructor(props) {
        super(props)
        this.state = {
            numValue: ""
        }
    }
    //FUNCTION - concats number selected from calc to state var (numValue)
    enterNum = (e) => {
        //defines selected number to a variable
        const selectedNum = e.target.textContent
        //adds
        this.setState((prevState,props) => {
            //prevents user from entering 0 as first number
            if (+prevState.numValue===0&&+selectedNum===0) return
            else {
                return {
                    //concats number selected to previous number
                    numValue: prevState.numValue+selectedNum
                }
            }


        })
    }

render(){
    console.log('current num --->',this.state.numValue)
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.enterNum} className="calc-button">7</button>
                    <button onClick={this.enterNum} className="calc-button">8</button>
                    <button onClick={this.enterNum} className="calc-button">9</button>
                    <button className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.enterNum} className="calc-button">4</button>
                    <button onClick={this.enterNum} className="calc-button">5</button>
                    <button onClick={this.enterNum} className="calc-button">6</button>
                    <button className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.enterNum} className="calc-button">1</button>
                    <button onClick={this.enterNum} className="calc-button">2</button>
                    <button onClick={this.enterNum} className="calc-button">3</button>
                    <button className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.enterNum} className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator