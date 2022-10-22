import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables

    state = {
        num1: '',
        num2: '',
        result: '',
        operator: '',
        numDisplay: ''
    }

    setNum = () => {

    }
    handleChange = (e) => {
        //////// 
        // if the current num1 is '' and operator is '' only add to num1
        // if operator is clicked only add to num2
        // if equals is clicked parse integers and complete operation 
        const currNum = e.target.innerText
         if (this.state.num1 === '' && currNum !== '0'){
            this.setState((prevstate)=> {
                console.log('bagel')
                return {num1: prevstate.num1 + currNum} 
            }) 
        }else if (this.state.num1 !== ''){
            console.log('mayo')
            this.setState((prevstate) => {
                return {num1: prevstate.num1 + currNum}
            })
        }
        console.log("this is num1", this.state.num1)
    }

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values:{this.state.num1} </p>
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={this.handleChange}>AC</button>
                    <button className="calc-button calc-button-top" onClick={this.handleChange}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={this.handleChange}>%</button>
                    <button className="calc-button calc-button-op" onClick={this.handleChange}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.handleChange}>7</button>
                    <button className="calc-button" onClick={this.handleChange}>8</button>
                    <button className="calc-button" onClick={this.handleChange}>9</button>
                    <button className="calc-button calc-button-op" onClick={this.handleChange}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.handleChange}>4</button>
                    <button className="calc-button" onClick={this.handleChange}>5</button>
                    <button className="calc-button" onClick={this.handleChange}>6</button>
                    <button className="calc-button calc-button-op" onClick={this.handleChange}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.handleChange}>1</button>
                    <button className="calc-button" onClick={this.handleChange}>2</button>
                    <button className="calc-button" onClick={this.handleChange}>3</button>
                    <button className="calc-button calc-button-op" onClick={this.handleChange}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={this.handleChange}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator