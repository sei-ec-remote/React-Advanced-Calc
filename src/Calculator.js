import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        operator: '',
        valueOne: '',
        valueTwo: '',
        solution: '',
        expectValueTwo: false,
    }

    handleMath () {
        const one = this.state.valueOne.parseInt()
        const two = this.state.valueTwo.parseInt()

        if (this.state.operator === '/') {
            this.setState({
                solution: (one / two)
            })
        }
    }

    render(){
        return (
            <div className="container">
                <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Value 1:
                    {this.state.valueOne}
                    <br />
                    Value 2: 
                    {this.state.valueTwo}
                </p>
                <div className="answer-box">{this.state.solution}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={() => {
                    console.log('resets values to defaults')
                        this.setState({
                            operator: '',
                            valueOne: '',
                            valueTwo: '',
                            solution: '',
                            expectValueTwo: false,
                        })
                        console.log(this.state)
                    }}>AC</button>
                    <button className="calc-button calc-button-top" onClick={() => {
                    console.log('test')
                }}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={() => {
                    console.log('test')
                }}>%</button>
                    <button className="calc-button calc-button-op" onClick={() => {
                    console.log('divide value1 and value2')
                        this.setState({
                            operator: '/',
                            expectValueTwo: true
                        })
                }}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => {
                    console.log('value #7')
                    if (this.state.expectValueTwo === false) {
                        this.setState({
                            valueOne: this.state.valueOne + '7'
                        })
                    } else {
                        this.setState({
                            valueTwo: this.state.valueTwo + '7'
                        })
                    }
                    console.log(this.state)
                }}>7</button>
                    <button className="calc-button" onClick={() => {
                    console.log('value #8')
                    if (this.state.expectValueTwo === false) {
                        this.setState({
                            valueOne: this.state.valueOne + '8'
                        })
                    } else {
                        this.setState({
                            valueTwo: this.state.valueTwo + '8'
                        })
                    }
                }}>8</button>
                    <button className="calc-button" onClick={() => {
                    console.log('value #9')
                    if (this.state.expectValueTwo === false) {
                        this.setState({
                            valueOne: this.state.valueOne + '9'
                        })
                    } else {
                        this.setState({
                            valueTwo: this.state.valueTwo + '9'
                        })
                    }
                }}>9</button>
                    <button className="calc-button calc-button-op" onClick={() => {
                    console.log('multiply value1 and value2')
                        this.setState({
                            operator: '*',
                            expectValueTwo: true
                        })
                }}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => {
                    console.log('value #4')
                    if (this.state.expectValueTwo === false) {
                        this.setState({
                            valueOne: this.state.valueOne + '4'
                        })
                    } else {
                        this.setState({
                            valueTwo: this.state.valueTwo + '4'
                        })
                    }
                }}>4</button>
                    <button className="calc-button" onClick={() => {
                    console.log('value #5')
                    if (this.state.expectValueTwo === false) {
                        this.setState({
                            valueOne: this.state.valueOne + '5'
                        })
                    } else {
                        this.setState({
                            valueTwo: this.state.valueTwo + '5'
                        })
                    }
                }}>5</button>
                    <button className="calc-button" onClick={() => {
                    console.log('value #6')
                    if (this.state.expectValueTwo === false) {
                        this.setState({
                            valueOne: this.state.valueOne + '6'
                        })
                    } else {
                        this.setState({
                            valueTwo: this.state.valueTwo + '6'
                        })
                    }
                }}>6</button>
                    <button className="calc-button calc-button-op" onClick={() => {
                    console.log('subtract value1 and value2')
                        this.setState({
                            operator: '-',
                            expectValueTwo: true
                        })
                }}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => {
                    console.log('value #1')
                    if (this.state.expectValueTwo === false) {
                        this.setState({
                            valueOne: this.state.valueOne + '1'
                        })
                    } else {
                        this.setState({
                            valueTwo: this.state.valueTwo + '1'
                        })
                    }
                }}>1</button>
                    <button className="calc-button" onClick={() => {
                    console.log('value #2')
                    if (this.state.expectValueTwo === false) {
                        this.setState({
                            valueOne: this.state.valueOne + '2'
                        })
                    } else {
                        this.setState({
                            valueTwo: this.state.valueTwo + '2'
                        })
                    }
                }}>2</button>
                    <button className="calc-button" onClick={() => {
                    console.log('value#3')
                    if (this.state.expectValueTwo === false) {
                        this.setState({
                            valueOne: this.state.valueOne + '3'
                        })
                    } else {
                        this.setState({
                            valueTwo: this.state.valueTwo + '3'
                        })
                    }
                }}>3</button>
                    <button className="calc-button calc-button-op" onClick={() => {
                    console.log('add value1 and value2')
                        this.setState({
                            operator: '+',
                            expectValueTwo: true
                        })
                }}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={() => {
                    console.log('value #0')
                    if (this.state.expectValueTwo === false && this.state.valueOne !== '0') {
                        this.setState({
                            valueOne: this.state.valueOne + '0'
                        })
                    } else if (this.state.valueTwo !== '0') {
                        this.setState({
                            valueTwo: this.state.valueTwo + '0'
                        })
                    }
                }}>0</button>
                    <button className="calc-button" onClick={() => {
                    console.log('decimal')
                    if (this.state.expectValueTwo === false) {
                        this.setState({
                            valueOne: this.state.valueOne + '.'
                        })
                    } else {
                        this.setState({
                            valueTwo: this.state.valueTwo + '.'
                        })
                    }
                }}>.</button>
                    <button className="calc-button calc-button-op" onClick={() => {
                    console.log('gets the solution')
                        this.setState({
                            operator: '=',
                            expectValueTwo: false
                        })

                        const one = parseInt(this.state.valueOne)
                        const two = parseInt(this.state.valueTwo)
                
                        if (this.state.operator === '/') {
                            this.setState({
                                solution: (one / two)
                            })
                        } else if (this.state.operator === '*') {
                            this.setState({
                                solution: (one * two)
                            })
                        } else if (this.state.operator === '+') {
                            this.setState({
                                solution: (one + two)
                            })
                        } else if (this.state.operator === '-') {
                            this.setState({
                                solution: (one - two)
                            })
                        }

                    console.log(this.state)
                }}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator