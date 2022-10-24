import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
// the backbone 
state = {
    num1: '',
    num2: '',
    total: '',
    operator: '',
}
// clear  calculator
clearCalc = () => {
this.setState({
    num1: '',
    num2: '',
    total: '',
    operator:''
})
}
// numbers being clicked
numInput = (e) => {
const numClicked = e.target.innerText
// console.log ('Number clicked', numClicked)
if (this.state.num1[0] === '0' && numClicked == '0' ) {
    this.setState({
        num1: '',
        num2: '',
        total: '',
        operator: 'invalid'
    })
} else if (this.state.num2[0] === '0' ) {
    this.setState({
        num1: '',
        num2: '',
        total: '',
        operator: 'invalid'
    })
} else if (this.state.operator.length === 0) {
    this.setState({
        num1: [...this.state.num1, numClicked ]
    })
} else {
    this.setState({
        num2: [...this.state.num2, numClicked ]
    })
}
}
// operators +, -, *, / and %
operator = (e) => {
// console.log ('operator is clicked')
this.setState ({
    operator: e.target.innerText
})
}



// results sorry that its repeated over and over again.
output = () => {
if (this.state.operator === '+') {
    this.setState ({
        total: parseFloat(this.state.num1.join('')) + parseFloat(this.state.num2.join('')),
        number1:'',
        number2:'',
        operator:'+'
    })
} else if (this.state.operator === '-') {
    this.setState ({
        total: parseFloat(this.state.num1.join('')) - parseFloat(this.state.num2.join('')),
        number1:'',
        number2:'',
        operator:'-'
    })
} else if (this.state.operator === 'x') {
    this.setState ({
        total: parseFloat(this.state.num1.join('')) * parseFloat(this.state.num2.join('')),
        number1:'',
        number2:'',
        operator:'x'
    })
} else if (this.state.operator === '/' && this.state.num2 == 0) {
    this.setState ({
        total: 'Invalid',
        number1:'',
        number2:'',
        operator:''
    })
} else if (this.state.operator === '/') {
    this.setState ({
        total: parseFloat(this.state.num1.join('')) / parseFloat(this.state.num2.join('')),
        number1:'',
        number2:'',
        operator:'/'
    })
} else {
    this.setState ({
        total: 'Invalid'
    })
}
}


render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <p>Hardest Homework I have ever done</p>
            <div className="calc-container">
                <p></p>
                <div className="answer-box">{this.state.num1}{this.state.operator}{this.state.num2}<br/>
                    {this.state.total}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={this.clearCalc}>AC</button>
                    <button className="calc-button calc-button-top" onClick={this.operator}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={this.operator}>%</button>
                    <button className="calc-button calc-button-op" onClick={this.operator}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.numInput}>7</button>
                    <button className="calc-button" onClick={this.numInput}>8</button>
                    <button className="calc-button" onClick={this.numInput}>9</button>
                    <button className="calc-button calc-button-op" onClick={this.operator}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.numInput}>4</button>
                    <button className="calc-button" onClick={this.numInput}>5</button>
                    <button className="calc-button" onClick={this.numInput}>6</button>
                    <button className="calc-button calc-button-op" onClick={this.operator}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.numInput}>1</button>
                    <button className="calc-button" onClick={this.numInput}>2</button>
                    <button className="calc-button" onClick={this.numInput}>3</button>
                    <button className="calc-button calc-button-op" onClick={this.operator}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={this.numInput}>0</button>
                    <button className="calc-button" onClick={this.numInput}>.</button>
                    <button className="calc-button calc-button-op" onClick={this.output}>=</button>
                </div>
            </div>
        </div>
    )}}
 export default Calculator