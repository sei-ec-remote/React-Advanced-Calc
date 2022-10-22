import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        operator: '+', 
        num1: 0,
        num2: 0,
        result: '',
        button1: 1,
        button2: 2,
        button3: 3,
        button4: 4,
        button5: 5,
        button6: 6,
        button7: 7,
        button8: 8,
        button9: 9
    }
 

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value });
    }

    // need a switch case for the operators
    calculate = (num1, num2) => {

        let int1 = Number(num1)
        let int2 = Number(num2)
        let result = 0
        switch (this.state.operator) {
            case '+':
                result = int1 + int2
                break

            case '-':
                result = int1 - int2
                break

            case '*':
                result = int1 * int2
                break

            case '/':
                result = int1 / int2
                break

            default:
                break
        }
        this.setState({
            result: result
        })
    }

    setOp = (e) => {
        this.setState({
            operator: e.target.value
        })
    }

// function to clear the calculator
    clearCalc = () => {
        this.setState({
            currentNum: []
        })
    }

    render(){
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: {this.state.num}</p>
                    <div className="answer-box">{this.state.result}</div>
                    <div className="calc-row">
                        <button className="calc-button calc-button-top">AC</button>
                        <button className="calc-button calc-button-top">+/-</button>
                        <button className="calc-button calc-button-top">%</button>
                        <button name="div" value="/" onClick={(e) => this.setOp(e)} className="calc-button calc-button-op">/</button>
                    </div>
                    <div className="calc-row">
                        <button name='button7' className="calc-button">7</button>
                        <button name='button8' className="calc-button">8</button>
                        <button name='button9' className="calc-button">9</button>
                        <button name="mult" value="*" onClick={(e) => this.setOp(e)} className="calc-button calc-button-op">x</button>
                    </div>
                    <div className="calc-row">
                        <button name='button4' className="calc-button">4</button>
                        <button name='button5' className="calc-button">5</button>
                        <button name='button6' className="calc-button">6</button>
                        <button name="sub" value="-" onClick={(e) => this.setOp(e)} className="calc-button calc-button-op">-</button>
                    </div>
                    <div className="calc-row">
                        <button name='button1' className="calc-button">1</button>
                        <button name='button2' className="calc-button">2</button>
                        <button name='button3' className="calc-button">3</button>
                        <button name="plus" value="+" onClick={(e) => this.setOp(e)} className="calc-button calc-button-op">+</button>
                    </div>
                    <div className="calc-row">
                        <button name='0' className="calc-button width-2">0</button>
                        <button className="calc-button">.</button>
                        <button name='equals' onClick={() => this.calculate(this.state.num1, this.state.num2)} className="calc-button calc-button-op">=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator