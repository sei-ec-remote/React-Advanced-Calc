import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables

    state = {
        values: [],
        answer: []
    }

    prependMinus = (e) => {
        e.preventDefault()
    }

    handleInputNumber = (e) => {
        e.preventDefault()
        const numberPressed = e.target.innerHTML
        console.log(numberPressed)
        if( this.state.answer.length === 0 &&
            numberPressed === '0') console.log('0 is invalid start')
        else {
            this.setState(prevState => ({
                answer: [...prevState.answer, numberPressed]
            }))
        }
    }

    handleDecimal = (e) => {
        e.preventDefault()
        if(this.state.answer.length === 0) {
            this.setState(prevState => ({
                answer: [...prevState.answer, '0','.']
            }))
        } else if(this.state.answer.includes('.')) {
            console.log('No using multiple decimal points within number')
        } else {
            this.setState(prevState => ({
                answer: [...prevState.answer, '.']
            }))
        }
    }

    handleEqual = (e) => {
        e.preventDefault()
        const remainingInput = this.state.answer
        this.setState(prevState => ({
            values: [...prevState.values, remainingInput.join('')]}),
            () => {
                const lastChar = this.state.values.slice(-1)
                console.log(Number.isInteger(parseFloat(lastChar)))
                if(Number.isInteger(parseFloat(lastChar)) || lastChar%1 !== 0) {
                    const stateForEval = this.state.values.map(x => {
                            if(x === 'x') return '*'
                            else return x
                        }).join('')
                    const answer = eval(stateForEval)
                    this.setState({
                        answer: [answer],
                        values: []
                    })
                }
            }
        )
    }

    handleInputOperator = (e) => {
        e.preventDefault()
        const operatorPressed = e.target.innerHTML
        console.log(operatorPressed)
        const lastChar = this.state.answer.slice(-1)
        if(Number.isInteger(parseFloat(lastChar))) {
            this.setState(prevState => ({
                values: [...prevState.values, this.state.answer.join(''), ' ',  operatorPressed, ' ']
            }))
            this.setState({
                answer: []
            })
        } else {
            this.setState({answer: ['error']},
                () => {
                    setTimeout(() => {
                        this.setState({values: [], answer: []})
                    }, 700)
            })
        }
    }

    clearInput = (e) => {
        e.preventDefault()
        console.log('AC hit')
        this.setState({values: [], answer: []})
    }

    render(){
        const values = this.state.values.join('')
        let answer
        if(this.state.answer.length === 0) answer = 0;
        else answer = this.state.answer.join('')
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: {values} </p>
                    <div className="answer-box">{answer}</div>
                    <div className="calc-row">
                        <button 
                            className="calc-button calc-button-top"
                            onClick={this.clearInput}
                            >AC</button>
                        <button 
                            className="calc-button calc-button-top"
                            onClick={this.prependMinus}
                            >+/-</button>
                        <button 
                            className="calc-button calc-button-top"
                            >%</button>
                        <button 
                            className="calc-button calc-button-op"
                            onClick={this.handleInputOperator}
                            >/</button>
                    </div>
                    <div className="calc-row">
                        <button 
                            className="calc-button"
                            onClick={this.handleInputNumber}
                            >7</button>
                        <button 
                            className="calc-button"
                            onClick={this.handleInputNumber}
                            >8</button>
                        <button 
                            className="calc-button"
                            onClick={this.handleInputNumber}
                            >9</button>
                        <button 
                            className="calc-button calc-button-op"
                            onClick={this.handleInputOperator}
                            >x</button>
                    </div>
                    <div className="calc-row">
                        <button 
                            className="calc-button"
                            onClick={this.handleInputNumber}
                            >4</button>
                        <button 
                            className="calc-button"
                            onClick={this.handleInputNumber}
                            >5</button>
                        <button 
                            className="calc-button"
                            onClick={this.handleInputNumber}
                            >6</button>
                        <button 
                            className="calc-button calc-button-op"
                            onClick={this.handleInputOperator}
                            >-</button>
                    </div>
                    <div className="calc-row">
                        <button 
                            className="calc-button"
                            onClick={this.handleInputNumber}
                            >1</button>
                        <button 
                            className="calc-button"
                            onClick={this.handleInputNumber}
                            >2</button>
                        <button 
                            className="calc-button"
                            onClick={this.handleInputNumber}
                            >3</button>
                        <button 
                            className="calc-button calc-button-op"
                            onClick={this.handleInputOperator}
                            >+</button>
                    </div>
                    <div className="calc-row">
                        <button 
                            className="calc-button width-2"
                            onClick={this.handleInputNumber}
                            >0</button>
                        <button 
                            className="calc-button"
                            onClick={this.handleDecimal}
                            >.</button>
                        <button 
                            className="calc-button calc-button-op"
                            onClick={this.handleEqual}
                            >=</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Calculator