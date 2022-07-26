import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        display: '0',
        operation: '',
        total: '',
        num1: '',
        num2: ''
    }

    clearAll = () => {
        this.setState(() => {
            return {
                operation: '',
                total: '',
                num1: '',
                num2: ''
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log('component updated')
        // console.log(prevState)
        // console.log(this.state)
        // switch (prevState) {
        //     case prevState.total !== this.state.total:
        //         this.setState(() => {
        //             return {
        //                 display: this.state.total
        //             }
        //         })
        //         break
        //     case prevState.operation !== this.state.operation:
        //         this.setState(() => {
        //             return {
        //                 display: this.state.operation
        //             }
        //         })
        //         break
        //     case prevState.num2 !== this.state.num2:
        //         this.setState(() => {
        //             return {
        //                 display: this.state.num2
        //             }
        //         })
        //         break
        //     case prevState.num1 !== this.state.num1:
        //         this.setState(() => {
        //             return {
        //                 display: this.state.num1
        //             }
        //         })
        //         break
        // }
        if (this.state.total !== prevState.total) {
            this.setState(() => {
                return {
                    display: this.state.total
                }
            })
        } else if (this.state.operation !== prevState.operation) {
            this.setState(() => {
                return {
                    display: this.state.operation
                }
            })
        } else if (this.state.num2 !== prevState.num2) {
            this.setState(() => {
                return {
                    display: this.state.num2
                }
            })
        } else if (this.state.num1 !== prevState.num1) {
            this.setState(() => {
                return {
                    display: this.state.num1
                }
            })
        }
    }

    handleInput = (number) => {
        if (this.state.operation && number !== 0) {
            console.log(number)
            this.setState((prevState) => {
                return {
                    num2: prevState.num2.concat(number)
                }
            })
        } else if (number !== 0) {
            console.log(number)
            this.setState((prevState) => {
                return {
                    num1: prevState.num1.concat(number)
                }
            })
        }
    }

    setOperation = (op) => {
        if (this.state.num1 && !this.state.operation) {
            this.setState(() => {
                return {
                    operation: op
                }
            })
        }
    }

    calculateTotal = () => {
        const num1 = Number(this.state.num1)
        const num2 = Number(this.state.num2)
        const operation = this.state.operation
        let opTotal = 0
        switch (operation) {
            case '+':
                opTotal = num1 + num2
                break
            case '-':
                opTotal = num1 - num2
                break
            case '*':
                opTotal = num1 * num2
                break
            case '/':
                opTotal = num1 / num2
                break
            case '%':
                opTotal = num1 % num2
                break
            default:
                break
        }
        this.setState(() => {
            return {
                operation: '',
                total: opTotal,
                num1: '',
                num2: ''
            }
        })
    }

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.display}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={this.clearAll}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top" onClick={() => this.setOperation('%')}>%</button>
                    <button className="calc-button calc-button-op" onClick={() => this.setOperation('/')}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => this.handleInput(7)}>7</button>
                    <button className="calc-button" onClick={() => this.handleInput(8)}>8</button>
                    <button className="calc-button" onClick={() => this.handleInput(9)}>9</button>
                    <button className="calc-button calc-button-op" onClick={() => this.setOperation('*')}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => this.handleInput(4)}>4</button>
                    <button className="calc-button" onClick={() => this.handleInput(5)}>5</button>
                    <button className="calc-button" onClick={() => this.handleInput(6)}>6</button>
                    <button className="calc-button calc-button-op" onClick={() => this.setOperation('-')}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => this.handleInput(1)}>1</button>
                    <button className="calc-button" onClick={() => this.handleInput(2)}>2</button>
                    <button className="calc-button" onClick={() => this.handleInput(3)}>3</button>
                    <button className="calc-button calc-button-op" onClick={() => this.setOperation('+')}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={() => this.handleInput(0)}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick={this.calculateTotal}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator