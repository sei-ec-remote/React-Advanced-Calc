import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            firstNum: '',
            secondNum: '',
            operator: '',
            display: '',
            error: false
        }
    }

    // handleClear to empty out state
    handleClear = () => {
        this.setState({
            value: 0,
            firstNum: '',
            secondNum: '',
            operator: '',
            display: '',
            error: false

        })
    }

    // handleNums determine if firstNum AND operator already have a value if not put number into firstNum if so add the number to second Num

    handleNums = (num) => {
        console.log("num2", num)
        // check if error else continue
        // if <error check>
        //  return handleError()




        if (this.state.operator === '') {
            // console.log("hit IF");
            this.setState({
                firstNum: this.state.firstNum + num
            })
        } else {
            // console.log("hit ELSE");
            this.setState({
                secondNum: this.state.secondNum + num
            })
        }
        this.handleDisplay(num)
    }


    // handleOperator which will add selected operator to state
    handleOperator = (operator) => {
        // check if error else continue

        // console.log('operator', operator)
        // if firstNum has a value
        this.setState({
            operator: operator
        })
        this.handleDisplay(operator)
    }

    // handleEquals which will evaluate firstNum Operator secondNum and add it to value

    handleEquals = () => {

        // checkForError()

        if (this.state.operator === '+') {
            this.setState({
                value: parseFloat(this.state.firstNum) + parseFloat(this.state.secondNum)
            })

        } else if (this.state.operator === '-') {
            this.setState({
                value: parseFloat(this.state.firstNum) - parseFloat(this.state.secondNum)
            })
        } else if (this.state.operator === '/') {
            this.setState({
                value: parseFloat(this.state.firstNum) / parseFloat(this.state.secondNum)
            })
        } else if (this.state.operator === '*') {
            this.setState({
                value: parseFloat(this.state.firstNum) * parseFloat(this.state.secondNum)
            })
        }


    }

    // handleDisplay to show each number
    // add in error message here?
    handleDisplay = (n) => {
        this.setState({
            display: this.state.display + n
        })
    }

    // handleError to display error if selecting 2 operators or starting new equation before hitting AC or trying to add more than 1 decimal or selecting 0 as first # (if first input is ., add 0 in front)
    handleError = () => {
        //error state set error to true 
    }

    render() {
        console.log('state', this.state)
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    {this.state.error ? (
                        <div>you don fucked up</div>
                    ) : (
                        <div className="answer-box">{this.state.display}</div>
                    )}
                    <div className="answer-box">{this.state.value}</div>
                    <div className="calc-row">
                        <button onClick={this.handleClear} className="calc-button calc-button-top">AC</button>
                        <button className="calc-button calc-button-top">+/-</button>
                        <button className="calc-button calc-button-top">%</button>
                        <button onClick={() => this.handleOperator('/')} className="calc-button calc-button-op">/</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={() => this.handleNums('7')} className="calc-button">7</button>
                        <button onClick={() => this.handleNums('8')} className="calc-button">8</button>
                        <button onClick={() => this.handleNums('9')} className="calc-button">9</button>
                        <button onClick={() => this.handleOperator('*')} className="calc-button calc-button-op">x</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={() => this.handleNums('4')} className="calc-button">4</button>
                        <button onClick={() => this.handleNums('5')} className="calc-button">5</button>
                        <button onClick={() => this.handleNums('6')} className="calc-button">6</button>
                        <button onClick={() => this.handleOperator('-')} className="calc-button calc-button-op">-</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={() => this.handleNums('1')} className="calc-button">1</button>
                        <button onClick={() => this.handleNums('2')} className="calc-button">2</button>
                        <button onClick={() => this.handleNums('3')} className="calc-button">3</button>
                        <button onClick={() => this.handleOperator('+')} className="calc-button calc-button-op">+</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={() => this.handleNums('0')} className="calc-button width-2">0</button>
                        <button onClick={() => this.handleNums('.')} className="calc-button">.</button>
                        <button onClick={this.handleEquals} className="calc-button calc-button-op">=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator