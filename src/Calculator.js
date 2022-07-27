import React, { Component } from 'react'

// TODO STRETCH:
// set it up so that if they click another operator AFTER result has been done, result becomes num1 and the new operator becomes the active operator

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
        let num1 = this.state.num1;
        let num2 = this.state.num2;
        if (this.state.operator !== '') {
            // disallow 0 as first number
            if (num2 === '' && e.target.innerText==='0') {
                return;
            }
            // checks for existing decimal in number
            if (num2.includes('.') && e.target.innerText==='.') {
                return;
            } else {
                number = num2 + e.target.innerText
            }
            this.setState(() => {
                return {
                    num2: number,
                }
            })
        } else {
            // need to disallow 0 as first number
            if (num1 === '' && e.target.innerText==='0') {
                return;
            }
            // checks for existing decimal in number
            if (num1.includes('.') && e.target.innerText==='.') {
                return;
            } else {
                number = num1 + e.target.innerText
            }
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
        if (this.state.operator !== '') {
            document.getElementById('error').innerHTML = 'Operator changed! <br /> Make sure that the display shows the correct operator before you click "=".'
        }
        const operator = e.target.innerText
        this.setState(() => {
            return {
                operator: operator,
            } 
        })
    }
    handlePositiveNegative = (e) => {
        let changeCharge;
        console.log('clicked + /: ', e.target.innerText)
        if (this.state.operator==='' && this.state.num2==='') {
            changeCharge = (this.state.num1 * -1).toString()
            this.setState(() => {
                return {
                    num1: changeCharge
                }
            })
        } else if (this.state.operator!=='' && this.state.num2==='') {
            return;
        } else {
            changeCharge = (this.state.num2 * -1).toString()
            this.setState(() => {
                return {
                    num2: changeCharge
                }
            })
        }
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
    handlePercent = (e) => {
        const operator = e.target.innerText
        let newSum = this.state.num1 / 100;
        this.setState(() => {
            return {
                operator: operator,
                result: newSum.toString()
            } 
        })
    }
    ///////////////////////
    // Render
    ///////////////////////
    render(){
        let display;
        if (this.state.operator === "%" ) {
            display = `${this.state.num1} / 100 = ${this.state.result}`
        } else if (this.state.result !== '') {
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
                        <button className="calc-button calc-button-top" onClick={this.handlePositiveNegative}>+/-</button>
                        <button className="calc-button calc-button-top" onClick={this.handlePercent}>%</button>
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
                <div>
                    <span id='error'></span>
                </div>
            </div>
        )
    }
}

export default Calculator