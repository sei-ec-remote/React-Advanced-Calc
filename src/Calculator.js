import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        displayNum: '',
        num1: '',
        num2: '',
        operator: '',
        error: false
    }

    operation = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b, 
        '/': (a, b) => a / b, 
    }

    handleAC = () => {
        this.setState({displayNum: '', result: '', num1: '', num2: '', operator: '', negPos: '', error: false})
    }

    handleSetNum = (e, input) => {
        e.preventDefault()
        
            console.log('after checking operator')
            if (!this.state.error) {

            if (this.state.operator === '') {
                this.setState({ displayNum: parseInt(this.state.displayNum + input) })
            } 
           
            if (this.operation.hasOwnProperty(input)) {
            this.setState({num1: this.state.displayNum, operator: input, displayNum: ''})
            }
            
            if (this.state.num1 !== '' && this.state.operator !== '') {
                if (Number.isInteger(parseInt(input))) {
                    console.log('we are...')
                this.setState({ displayNum: parseInt(this.state.displayNum + input)}) 
                this.setState({ num2: this.state.displayNum + input })
                } else {
                    this.setState({ displayNum: 'ERROR press AC', error: true})
                }
                
            } 
            
            if (input === '=') {
                let firstNumber = parseInt(this.state.num1)
                let secondNumber = parseInt(this.state.num2)
                if (secondNumber === 0 && this.state.operator === '/') {
                    this.setState({ displayNum: 'ERROR press AC', error: true})

                } else {
                    this.setState({ displayNum: this.operation[this.state.operator](firstNumber, secondNumber)})
                }
            }

        } else {

        }
        
        

        
    }
render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.displayNum}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top"
                        onClick={this.handleAC}
                    >AC</button>
                    <button className="calc-button calc-button-top"
                        onClick={(e) => this.handleSetNum(e, '±')}
                    >+/-</button>
                    <button className="calc-button calc-button-top"
                        onClick={(e) => this.handleSetNum(e, '%')}
                    >%</button>
                    <button className="calc-button calc-button-op"
                        onClick={(e) => this.handleSetNum(e, '/')}
                    >/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"
                        onClick={(e) => this.handleSetNum(e, '7')}
                    >7</button>
                    <button className="calc-button"
                        onClick={(e) => this.handleSetNum(e, '8')}
                    >8</button>
                    <button className="calc-button"
                        onClick={(e) => this.handleSetNum(e, '9')}
                    >9</button>
                    <button className="calc-button calc-button-op"
                        onClick={(e) => this.handleSetNum(e, '*')}
                    >x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"
                        onClick={(e) => this.handleSetNum(e, '4')}
                    >4</button>
                    <button className="calc-button"
                        onClick={(e) => this.handleSetNum(e, '5')}
                        >5</button>
                    <button className="calc-button"
                        onClick={(e) => this.handleSetNum(e, '6')}
                    >6</button>
                    <button className="calc-button calc-button-op"
                        onClick={(e) => this.handleSetNum(e, '-')}
                    >-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"
                        onClick={(e) => this.handleSetNum(e, '1')}
                    >1</button>
                    <button className="calc-button"
                        onClick={(e) => this.handleSetNum(e, '2')}
                    >2</button>
                    <button className="calc-button"
                        onClick={(e) => this.handleSetNum(e, '3')}
                    >3</button>
                    <button className="calc-button calc-button-op"
                        onClick={(e) => this.handleSetNum(e, '+')}
                    >+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2"
                        onClick={(e) => this.handleSetNum(e, '0')}
                    >0</button>
                    <button className="calc-button"
                        onClick={(e) => this.handleSetNum(e, '.')}
                    >.</button>
                    <button className="calc-button calc-button-op"
                        onClick={(e) => this.handleSetNum(e, '=')}
                    >=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator