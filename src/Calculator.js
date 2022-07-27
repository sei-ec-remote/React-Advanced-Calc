import React, { Component } from 'react'

class Calculator extends Component {

    state = {
        values: [],
        answerBox: []
    }

    prependMinus = (e) => {
        e.preventDefault()
        console.log('changed negative to positive, OR positive to negative')
    }

    handleInputNumber = (e) => {
        e.preventDefault()
        const numberPressed = e.target.innerHTML
        console.log(numberPressed)
        if( this.state.answerBox.length === 0 &&
            numberPressed === '0') console.log('0 is invalid start')
        else {
            this.setState(prevState => ({
                answerBox: [...prevState.answerBox, numberPressed]
            }))
        }

    }

    handleDecimal = (e) => {
        e.preventDefault()
        if(this.state.answerBox.length === 0) {
            this.setState(prevState => ({
                answerBox: [...prevState.answerBox, '0','.']
            }))
        } else if(this.state.answerBox.includes('.')) {
            console.log('No using multiple decimal points within number')
        } else {
            this.setState(prevState => ({
                answerBox: [...prevState.answerBox, '.']
            }))
        }
    }

    handleEqual = (e) => {
        e.preventDefault()
    }

    handleInputOperator = (e) => {
        e.preventDefault()
        const operatorPressed = e.target.innerHTML
        console.log(operatorPressed)
        // this.setState(prevState => ({
        //     answerBox: [...prevState.answerBox, operatorPressed]
        // }))
        this.setState(prevState => ({
            values: [...prevState.values, this.state.answerBox.join(''), operatorPressed]
        }))
        this.setState({
            answerBox: []
        })
    }

    clearInput = (e) => {
        e.preventDefault()
        console.log('AC hit')
        this.setState({values: [], answerBox: []})
    }

    render(){
        const values = this.state.values.join('')
        let answerBox
        if(this.state.answerBox.length === 0) answerBox = 0;
        else answerBox = this.state.answerBox.join('')
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: {values} </p>
                    <div className="answer-box">{answerBox}</div>
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