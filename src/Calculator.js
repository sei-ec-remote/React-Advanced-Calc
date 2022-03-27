import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    constructor(props) {
        super(props)
        this.state = {
            number1:'',
            number2:'',
            total:'',
            operator:''
        }
    }

    numberInput = (e) => {
        // console.log('number is clicked')
        const numberClicked = e.target.innerText
        // console.log('the number clicked:', numberClicked)
        this.setState({
            display:numberClicked
        })
    }

    signInput = (e) => {
        // console.log('operator is clicked')
        if(this.state.display){
            let result = this.state.display
            // console.log(result,'this should log after a number is clicked')
            this.setState({
                operator: e.target.innerText,
            })
        }
    }

    clearInput = () => {
        console.log('clear calc')
        this.setState({
            display:'',
            total:0,
            operator:''
        })
    }


    resultInput = () => {
        // console.log('result is clicked')
        let result = 0
        if (this.state.operator === '+') {
            result = parseInt(this.state.number1) + parseInt(this.state.number2)
        } else if (this.state.operator === '-') {
            result = parseInt(this.state.number1) - parseInt(this.state.number2)
        } else if (this.state.operator === 'x') {
            result = parseInt(this.state.number1) * parseInt(this.state.number2)
        } else if (this.state.operator === '/') {
            result = parseInt(this.state.number1) / parseInt(this.state.number2)
        }
        this.setState({
            display: result
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
                    <button onClick={this.clearInput} className="calc-button calc-button-top">AC</button>
                    <button onClick={this.signInput} className="calc-button calc-button-top">+/-</button>
                    <button onClick={this.signInput} className="calc-button calc-button-top">%</button>
                    <button onClick={this.signInput} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.numberInput} className="calc-button">7</button>
                    <button onClick={this.numberInput} className="calc-button">8</button>
                    <button onClick={this.numberInput} className="calc-button">9</button>
                    <button onClick={this.signInput} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.numberInput} className="calc-button">4</button>
                    <button onClick={this.numberInput} className="calc-button">5</button>
                    <button onClick={this.numberInput} className="calc-button">6</button>
                    <button onClick={this.signInput} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.numberInput} className="calc-button">1</button>
                    <button onClick={this.numberInput} className="calc-button">2</button>
                    <button onClick={this.numberInput} className="calc-button">3</button>
                    <button onClick={this.signInput} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.numberInput} className="calc-button width-2">0</button>
                    <button onClick={this.numberInput} className="calc-button">.</button>
                    <button onClick={this.resultInput} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator