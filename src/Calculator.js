import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    constructor(props) {
        super(props)
        this.state = {
            numValueOne: "",
            numValueTwo: "",
            operator: "",
            evalNum: ""
  
        }
    }
    //FUNCTION - sets the operator to state var (operator)
    setOperator = (e) => {
        //defines selected operator to variable
        const selectedOperator = e.target.textContent
        this.setState((prevState,props)=> {
            //prevents user from reselecting another operator once one is selected
            if (prevState.operator!=="") return
            else {
                return {
                    //assigns selected operator to state variable
                    operator: selectedOperator
                }
            }
        })
    }


    //FUNCTION - concats number selected from calc to state variables (numValueOne & numValueTwo)
        // also updates the display
    enterNum = (e) => {
        //defines selected number to a variable
        const selectedNum = e.target.textContent
        //assigns display div to variable
        const display = document.getElementById('display')
        this.setState((prevState,props) => {
            //allows numValueOne to still be updated
            if (prevState.operator==="") {
                //prevents user from entering 0 as first number
                if (+prevState.numValueOne===0&&+selectedNum===0) return
                else {
                    //updates the display with the selectedNum
                    display.textContent=this.state.numValueOne+selectedNum
                    return {
                        //concats number selected to previous number
                        numValueOne: prevState.numValueOne+selectedNum
                    }
                }
            }
            //switches to numValueTwo to be updated
            else {
                //prevents user from entering 0 as first number
                if (+prevState.numValueTwo===0&&+selectedNum===0) return
                else {
                    //updates the display with the selectedNum
                    display.textContent=this.state.numValueTwo+selectedNum
                    return {
                        //concats number selected to previous number
                        numValueTwo: prevState.numValueTwo+selectedNum
                    }
                }

            }

        })
    }

    //FUNCTION - evaluates the num1 & num2 with the operator selected
    eval = (e) => {
        //assigns display div to variable
        const display = document.getElementById('display')

        this.setState((prevState,props) => {
            if (prevState.numValueOne===""||prevState.numValueTwo===""||prevState.operator==="") return 
            else {
                if (prevState.operator==="x") {
                    //updates the display with the evalNum
                    display.textContent=+this.state.numValueOne/(+this.state.numValueTwo)
                    return {
                        evalNum: parseInt(prevState.numValueOne)/parseInt(prevState.numValueTwo)
                    }

                }
                else if (prevState.operator==="/") {
                    //updates the display with the evalNum
                    display.textContent=+this.state.numValueOne/(+this.state.numValueTwo)
                    return {
                        evalNum: parseInt(prevState.numValueOne)/parseInt(prevState.numValueTwo)
                    }

                }
                else if (prevState.operator==="+") {
                    //updates the display with the evalNum
                    display.textContent=+this.state.numValueOne+(+this.state.numValueTwo)
                    return {
                        evalNum: parseInt(prevState.numValueOne)+parseInt(prevState.numValueTwo)
                    }

                }
                else {
                    //updates the display with the evalNum
                    display.textContent=+this.state.numValueOne-(+this.state.numValueTwo)
                    return {
                        evalNum: parseInt(prevState.numValueOne)-parseInt(prevState.numValueTwo)
                    }

                }

            }

        })
    }

render(){


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div id='display' className="answer-box">0</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button onClick={this.setOperator} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.enterNum} className="calc-button">7</button>
                    <button onClick={this.enterNum} className="calc-button">8</button>
                    <button onClick={this.enterNum} className="calc-button">9</button>
                    <button onClick={this.setOperator} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.enterNum} className="calc-button">4</button>
                    <button onClick={this.enterNum} className="calc-button">5</button>
                    <button onClick={this.enterNum} className="calc-button">6</button>
                    <button onClick={this.setOperator} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.enterNum} className="calc-button">1</button>
                    <button onClick={this.enterNum} className="calc-button">2</button>
                    <button onClick={this.enterNum} className="calc-button">3</button>
                    <button onClick={this.setOperator} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.enterNum} className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button onClick={this.eval} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator