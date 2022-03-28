import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    constructor(props) {
        super(props)
        this.state = {
            number1:'',
            number2:'',
            total:'',
            operator:'',
        }
    }


    numberInput = (e) => {
        // console.log('number is clicked')
        const numberClicked = e.target.innerText
        // console.log('the number clicked:', numberClicked)
        if(this.state.number1[0] === '0' && numberClicked == '0' ) {
        this.setState({
            number1:'',
            number2:'',
            operator:'',
            total:'invalid input'
        }) 
        } else if (this.state.number2[0] === '0') {
            this.setState({
                number1:'',
                number2:'',
                operator:'',
                total:'invalid input'
        }) 
        } else if (this.state.operator.length === 0) {
            this.setState({
            number1:[...this.state.number1,numberClicked]
        })
        } else { this.setState({
            number2:[...this.state.number2,numberClicked]
        })
    }
}

    signInput = (e) => {
        console.log('operator is clicked')
            // console.log(result,'this should log after a number is clicked')
            this.setState({
                operator: e.target.innerText
            })
    }

    clearInput = () => {
        console.log('clear calc')
        this.setState({
            number1:'',
            number2:'',
            total:'Cleared',
            operator:''
        })
    }


    resultInput = () => { 
        // console.log('result is clicked')
        if (this.state.operator === '+') {
            this.setState({
                total: parseFloat(this.state.number1.join('')) + parseFloat(this.state.number2.join('')),
                number1:'',
                number2:'',
                operator:''
            })
        } else if (this.state.operator === '-') {
            this.setState({
                total: parseFloat(this.state.number1.join('')) - parseFloat(this.state.number2.join('')),
                number1:'',
                number2:'',
                operator:''
            })
        } else if (this.state.operator === 'x') {
            this.setState({
                total: parseFloat(this.state.number1.join('')) * parseFloat(this.state.number2.join('')),
                number1:'',
                number2:'',
                operator:''
            })
        } else if (this.state.operator === '/' && this.state.number2 == 0) {
            this.setState({
                total: 'Cannot divide by 0',
                number1:'',
                number2:'',
                operator:''
            })
        } else if (this.state.operator === '/') {
                this.setState({
                    total: parseFloat(this.state.number1.join('')) / parseFloat(this.state.number2.join('')),
                    number1:'',
                    number2:'',
                    operator:''
                })
        } else {
            this.setState({
                total: 'Please enter a valid method'
            })
        }
    }

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values:</p>
                <div className="answer-box">{this.state.number1}{this.state.operator}{this.state.number2}</div>
                <div>Answer: {this.state.total}</div>
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