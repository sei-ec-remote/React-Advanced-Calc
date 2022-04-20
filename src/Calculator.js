import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    constructor() {
        super()
        this.state = {
            num1: '',
            num2: '',
            operator: '',
            ans: ''
        }
    }

    clickNumber = (e) => {
        console.log('this is number clicked', e.target.value)
        if (this.state.operator === ''){
            this.setState({
                num1: this.state.num1 + e.target.value
            })
        }   else if (this.state.operator !== '' ){
            this.setState({
                num2: this.state.num2 + e.target.value
            })
        }   else {
            console.log('error')
        }
        
    }

    clear = () => {
        console.log('this is cleared')
        this.setState({
            num1: '',
            num2: '',
            operator: '',
            ans: ''
        })
    }

    operator = (e) => {
        console.log('this is operator', e.target.value)
        this.setState({
            operator: e.target.value
        })
    }
    
    addNums = () => {
        console.log(this.state.num1, "+", this.state.num2)
        this.setState({
            ans: parseInt(this.state.num1) + parseInt(this.state.num2)
        })
        console.log('this is answer', this.state.ans)
    }

    subNums = () => {
        this.setState(prevstate => (
            this.setState({
                ans: parseInt(prevstate.num1) - parseInt(prevstate.num2)
            })
        ))
    }

    mulNums = () => {
        this.setState(prevstate => (
            this.setState({
                ans: parseInt(prevstate.num1) * parseInt(prevstate.num2)
            })
        ))
    }

    divNums = () => {
        this.setState(prevstate => (
            this.setState({
                ans: parseInt(prevstate.num1) / parseInt(prevstate.num2)
            })
        ))
    }

    solution = () => {
        console.log('not working', this.state.operator)
        if (this.state.operator === '+') {
            console.log('this is addition')
            this.addNums()
            console.log('this is result',this.state.ans)
        }   else if (this.state.operator === '-') {
            console.log('this is sub')
            this.subNums()
        }   else if (this.state.operator === 'x') {
            console.log('this is mul')
            this.mulNums()
        }   else if (this.state.operator === "/") {
            console.log('this is divi')
            this.divNums()
        }   else {
            console.log('not working', this.state.operator)
        }
    }

// this.state.display ? <-

    render(){
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    <div className="answer-box">{this.state.num1} {this.state.operator} {this.state.num2} = {this.state.ans}</div>
                    <div className="calc-row">
                        <button onClick={this.clear} className="calc-button calc-button-top">AC</button>
                        <button className="calc-button calc-button-top">+/-</button>
                        <button className="calc-button calc-button-top" value="%">%</button>
                        <button onClick={this.operator} className="calc-button calc-button-op" value="/">/</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.clickNumber} className="calc-button" value="7">7</button>
                        <button onClick={this.clickNumber} className="calc-button" value="8">8</button>
                        <button onClick={this.clickNumber} className="calc-button" value="9">9</button>
                        <button onClick={this.operator} className="calc-button calc-button-op" value="x">x</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.clickNumber} className="calc-button" value="4">4</button>
                        <button onClick={this.clickNumber} className="calc-button" value="5">5</button>
                        <button onClick={this.clickNumber} className="calc-button" value="6">6</button>
                        <button onClick={this.operator} className="calc-button calc-button-op" value="-">-</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.clickNumber} className="calc-button" value="1">1</button>
                        <button onClick={this.clickNumber} className="calc-button" value="2">2</button>
                        <button onClick={this.clickNumber} className="calc-button" value="3">3</button>
                        <button onClick={this.operator} className="calc-button calc-button-op" value="+">+</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.clickNumber} className="calc-button width-2" value="0">0</button>
                        <button className="calc-button" valule=".">.</button>
                        <button onClick={this.solution} className="calc-button calc-button-op" value="=">=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator