import React, { Component } from 'react'

class Calculator extends Component {
    //Declare state variables
    state = {
        num1: [],
        num2: '',
        operator: '',
        sum: ''
    }
    // number pressing function
    numKeys = (e) => {
        const btnText = e.target.innerText
        const btnColor = e.target.style.backgroundColor
        let operator = this.state.operator

        // console.log('text', btnText)
        // console.log('color', btnColor) 
        if(operator) {  
        this.setState({
            num2:this.state.num2 + btnText
            
        })
    } else {
        this.setState({
        num1:this.state.num1 + btnText
        })
    }
    }
    // .dot func to use float nums
    dotKeys = (e) => {
        const btnText = e.target.innerText
        const btnColor = e.target.style.backgroundColor
        let  num1 = this.state.num1
        if(num1) {
            this.setState({
                
            })
        }
        

    }
    //operator keys function
    opKeys = (e) => {
        const btnText = e.target.innerText
        const btnColor = e.target.style.backgroundColor
        let  num1 = this.state.num1
        if(!num1 || num1 == '0') {
            this.setState({
                operator: ''
            })
        } else {
            this.setState({
                operator: btnText
        })
    }
    }
    // sum  key function
    sumKeys = (e) => {
        const btnText = e.target.innerText
        const btnColor = e.target.style.backgroundColor
        let operator = this.state.operator
        console.log(btnText)
        console.log(btnColor)
        if(operator === '+') {
            this.setState({
                sum: Number(this.state.num1) + Number(this.state.num2)
            })
        } 
        if(operator === '-') {
            this.setState({
                sum: Number(this.state.num1) - Number(this.state.num2)
            })
        }
        if(operator === 'x') {
            this.setState({
                sum: Number(this.state.num1) * Number(this.state.num2)
            })
        }
        if(operator === '/') {
            this.setState({
                sum: Number(this.state.num1) / Number(this.state.num2)
            })
        }
    }

    // clear function AC
    clearKeys = () => {
        this.setState({
            num1: '',
            num2: '',
            operator: '',
            sum: ''
        })
     }
   

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>
                    Values: {this.state.num1}
                    {this.state.operator}
                    {this.state.num2}
                </p>
                <div className="answer-box">{this.state.sum}</div>
                <div className="calc-row">
                    <button onClick={this.clearKeys} className="calc-button calc-button-top">AC</button>
                    <button onClick={this.btnKeys} className="calc-button calc-button-top">+/-</button>
                    <button onClick={this.btnKeys} className="calc-button calc-button-top">%</button>
                    <button onClick={this.opKeys} value="/" className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.numKeys} className="calc-button">7</button>
                    <button onClick={this.numKeys} className="calc-button">8</button>
                    <button onClick={this.numKeys} className="calc-button">9</button>
                    <button onClick={this.opKeys} value="*" className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.numKeys} className="calc-button">4</button>
                    <button onClick={this.numKeys} className="calc-button">5</button>
                    <button onClick={this.numKeys} className="calc-button">6</button>
                    <button onClick={this.opKeys} value="-" className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.numKeys} className="calc-button">1</button>
                    <button onClick={this.numKeys} className="calc-button">2</button>
                    <button onClick={this.numKeys} className="calc-button">3</button>
                    <button onClick={this.opKeys} value="+" className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.numKeys} className="calc-button width-2">0</button>
                    <button onClick={this.numKeys} className="calc-button">.</button>
                    <button onClick={this.sumKeys} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator