import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        calc: "",
        result: ""
    }

    ops = ['/','x','-','+']

    updateCalc = value =>{
        //if no prefix numbers or if previous element was also operand, don't do anything
        if((this.ops.includes(value) && this.state.calc === '')|| (this.ops.includes(value) && this.ops.includes(this.state.calc.slice(-1)[0])))
        {return}

        this.setState({"calc": this.state.calc + value})
        
    }

    evaluateCalc = () =>{
        this.setState({"result": this.state.calc + "=" + eval(this.state.calc).toString()})

        this.setState({"calc": ""})

    }

    clearCalc = () => {
        this.setState({"calc": ""})
    }


render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>{this.state.result}</p>
                <div className="answer-box">{this.state.calc || '0'}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={() =>{this.clearCalc()}}>AC</button>
                    <button className="calc-button calc-button-top" onClick={() =>{this.updateCalc("+/-")}}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={() =>{this.updateCalc("%")}}>%</button>
                    <button className="calc-button calc-button-op" onClick={() =>{this.updateCalc("/")}}>/</button>
                </div>
                <div className="calc-row">
                    <button onClick={() =>{this.updateCalc("7")}}className="calc-button">7</button>
                    <button className="calc-button" onClick={() =>{this.updateCalc("8")}}>8</button>
                    <button className="calc-button" onClick={() =>{this.updateCalc("9")}}>9</button>
                    <button className="calc-button calc-button-op" onClick={() =>{this.updateCalc("x")}}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() =>{this.updateCalc("4")}}>4</button>
                    <button className="calc-button" onClick={() =>{this.updateCalc("5")}}>5</button>
                    <button className="calc-button" onClick={() =>{this.updateCalc("6")}}>6</button>
                    <button className="calc-button calc-button-op" onClick={() =>{this.updateCalc("-")}}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() =>{this.updateCalc("1")}}>1</button>
                    <button className="calc-button" onClick={() =>{this.updateCalc("2")}}>2</button>
                    <button className="calc-button" onClick={() =>{this.updateCalc("3")}}>3</button>
                    <button className="calc-button calc-button-op" onClick={() =>{this.updateCalc("+")}}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={() =>{this.updateCalc("0")}}>0</button>
                    <button className="calc-button" onClick={() =>{this.updateCalc(".")}}>.</button>
                    <button className="calc-button calc-button-op" onClick={() =>{this.evaluateCalc()}}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator