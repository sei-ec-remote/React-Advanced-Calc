import React, { Component } from 'react'

// TODO:
// implement message if they change the operator after already chosen ('Did you mean to do that?')
    // otherwise disallow it
// set it up so that if they click another operator AFTER result has been done, result becomes num1 and the new operator becomes the active operator
// TODO BONUS
// set up decimal - only allow ONE! (put in check in addNumber) (and then remember that if decimal is first input, to input '0.')

class Calculator extends Component {
    // Declare state variables
    state = {
        // need to store operator
        operator: '',
        // need to store values
        num1: '',
        num2: '',
        // this will store whole operation
        operation: '',
        // store display/result
        result: '',
    }
    ///////////////////////
    // Display Functions
    ///////////////////////
    clearAll = (e) => {
        this.setState(() => {
            return {
                num1: '',
                num2: '',
                operator: '',
                operation: '',
                result: ''
            }
        })
    }
    addNumberToDisplay = (e) => {
        let number;
        if (this.state.operator !== '') {
            // disallow 0 as first number
            if (this.state.num2 === '' && e.target.innerText==='0') {
                return;
            }
            number = this.state.num2 + e.target.innerText
            this.setState(() => {
                return {
                    num2: number,
                }
            })
        } else {
            // need to disallow 0 as first number
            if (this.state.num1 === '' && e.target.innerText==='0') {
                return;
            }
            number = this.state.num1 + e.target.innerText
            this.setState(() => {
                return {
                    num1: number,
                }
            })
        }       
        // we want this number to be added to display
        // if the first number, then replace '0'
    }
    setOperator = (e) => {
        console.log(e.target.innerText)
        const operator = e.target.innerText
        this.setState(() => {
            return {
                operator: operator,
            } 
        })
    }
    ///////////////////////
    // Operation Functions
    ///////////////////////
    handleOperation = () => {
        // when click operator, set num1 and start editing num2
        if (!this.state.operator) {
            return;
        }
        let newSum;
        // use switch cases for operations
        switch (this.state.operator) {
            case '+':
                newSum = parseInt(this.state.num1) + parseInt(this.state.num2);
                break;
            case '-':
                newSum = parseInt(this.state.num1) - parseInt(this.state.num2);
                break;
            case 'x':
                newSum = parseInt(this.state.num1) * parseInt(this.state.num2);
                break;
            case '/':
                newSum = parseInt(this.state.num1) / parseInt(this.state.num2)
                break;
            default:
                console.log('there has been an error!')
        }
        let display = this.state.num1 + ' ' + this.state.operator + ' ' + this.state.num2  + ' = ' + newSum.toString();
        this.setState(() => {
            return {
                result: newSum.toString(),
                operation: display,
            }
        })
    }
    ///////////////////////
    // Render
    ///////////////////////
    render(){
        let display;
        if (this.state.result !== '') {
            display = `${this.state.operation}`
        } else if (this.state.num2 !== '') {
            display = `${this.state.num1} ${this.state.operator} ${this.state.num2}`
        } else {
            display = `${this.state.num1} ${this.state.operator} ${this.state.num2}`
        }
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    <div className="answer-box">
                    {display}
                    </div>
                    <div className="calc-row">
                        <button className="calc-button calc-button-top" onClick={this.clearAll}>AC</button>
                        <button className="calc-button calc-button-top">+/-</button>
                        <button className="calc-button calc-button-top">%</button>
                        <button className="calc-button calc-button-op" onClick={this.setOperator}>/</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" onClick={this.addNumberToDisplay}>7</button>
                        <button className="calc-button" onClick={this.addNumberToDisplay}>8</button>
                        <button className="calc-button" onClick={this.addNumberToDisplay}>9</button>
                        <button className="calc-button calc-button-op" onClick={this.setOperator}>x</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" onClick={this.addNumberToDisplay}>4</button>
                        <button className="calc-button" onClick={this.addNumberToDisplay}>5</button>
                        <button className="calc-button" onClick={this.addNumberToDisplay}>6</button>
                        <button className="calc-button calc-button-op" onClick={this.setOperator}>-</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" onClick={this.addNumberToDisplay}>1</button>
                        <button className="calc-button" onClick={this.addNumberToDisplay}>2</button>
                        <button className="calc-button" onClick={this.addNumberToDisplay}>3</button>
                        <button className="calc-button calc-button-op" onClick={this.setOperator}>+</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button width-2" onClick={this.addNumberToDisplay}>0</button>
                        <button className="calc-button" onClick={this.addNumberToDisplay}>.</button>
                        <button className="calc-button calc-button-op" onClick={this.handleOperation}>=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator