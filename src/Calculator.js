import React, { Component } from 'react'

export default class Calculator extends Component {
    // Declare state variables
    constructor(props) {
        super(props)
        this.state = {
            numValueOne: 'emp',
            numValueTwo: 'emp',
            operator: "",
            evalNum: "",
            evalBool: false
  
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
                    if (prevState.numValueOne==='emp') {
                        //updates the display with the selectedNum
                        display.textContent=selectedNum
                        return {numValueOne: selectedNum}
                    } else {
                        //updates the display with the selectedNum
                        display.textContent=this.state.numValueOne+selectedNum
                        return {
                            //concats number selected to previous number
                            numValueOne: prevState.numValueOne+selectedNum
                        }
                    }
                }
            }
            //switches to numValueTwo to be updated
            else {
                //prevents user from entering 0 twice
                if (prevState.evalBool) return 
                if (+prevState.numValueTwo===0&&+selectedNum===0) return
                else {
                    if (prevState.numValueTwo==='emp') {
                        //updates the display with the selectedNum
                        display.textContent=selectedNum
                        return {numValueTwo: selectedNum}
                    } else {
                        //updates the display with the selectedNum
                        display.textContent=this.state.numValueTwo+selectedNum
                        return {
                            //concats number selected to previous number
                            numValueOne: prevState.numValueTwo+selectedNum
                        }
                    }
                }
            }

        })
    }

    //FUNCTION - evaluates the num1 & num2 with the operator selected & updates display
    eval = (e) => {
        if (this.state.numValueOne===""||this.state.numValueTwo===""||this.state.operator===""||this.state.evalBool) return 
        //assigns display div to variable
        const display = document.getElementById('display')
        this.setState((prevState,props) => {
            if (prevState.operator==="x") {
                //updates the display with the evalNum
                display.textContent=+this.state.numValueOne*(+this.state.numValueTwo)
                return {
                    evalNum: parseInt(prevState.numValueOne)*parseInt(prevState.numValueTwo),
                    evalBool: true
                } 

            }
            else if (prevState.operator==="/") {
                if(+prevState.numValueTwo===0) {
                    display.textContent="Not a Number"
                    return {evalBool:true}
                }
                //updates the display with the evalNum
                display.textContent=+this.state.numValueOne/(+this.state.numValueTwo)
                return {
                    evalNum: parseInt(prevState.numValueOne)/parseInt(prevState.numValueTwo),
                    evalBool: true
                }

            }
            else if (prevState.operator==="+") {
                //updates the display with the evalNum
                display.textContent=+this.state.numValueOne+(+this.state.numValueTwo)
                return {
                    evalNum: parseInt(prevState.numValueOne)+parseInt(prevState.numValueTwo),
                    evalBool: true
                }

            }
            else {
                //updates the display with the evalNum
                display.textContent=+this.state.numValueOne-(+this.state.numValueTwo)
                return {
                    evalNum: parseInt(prevState.numValueOne)-parseInt(prevState.numValueTwo),
                    evalBool: true
                }
            }
        })
        display.textContent=this.state.evalNum
    }



render(){
    console.log('number2',this.state.numValueTwo)


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

