import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    constructor() {
            super()
            this.state = {
                input1: [],
                input2: [],
                operator: [],
                answer: []

            }
        }
        setInputs = (e) =>{
            if(this.state.operator.length ===0){
                let buttonNum = e.target.innerText
                this.setState({
                        input1: [...this.state.input1, buttonNum]
                })
            } else {
                let buttonNum = e.target.innerText
                this.setState({
                        input2: [...this.state.input2, buttonNum]
                })
            }
        }
        clearDisplay = (e) =>{
            this.setState({
                input1: [],
                input2: [],
                operator: [],
                answer: []
            })
        }
        setOperator = (e) =>{
            this.setState({
                operator: e.target.innerText
            })
            console.log(this.state.operator)
        }
        eval = () =>{
            if(this.state.operator === '+'){
                let num1 = parseFloat(this.state.input1.join(''))
                let num2 = parseFloat(this.state.input2.join(''))
                this.setState({
                    answer: (num1 + num2)
                })
            } else if(this.state.operator === '-'){
                let num1 = parseFloat(this.state.input1.join(''))
                let num2 = parseFloat(this.state.input2.join(''))
                this.setState({
                    answer: (num1 - num2)
                })
            } else if(this.state.operator === 'x'){
                let num1 = parseFloat(this.state.input1.join(''))
                let num2 = parseFloat(this.state.input2.join(''))
                this.setState({
                    answer: (num1 * num2)
                })
            } else if(this.state.operator === '/'){
                let num1 = parseFloat(this.state.input1.join(''))
                let num2 = parseFloat(this.state.input2.join(''))
                this.setState({
                    answer: (num1 / num2)
                })
            }
        }
render(){
    const {answer, input1, input2, operator} = this.state
    const { setInputs, clearDisplay, setOperator } = this
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">
                <p>{input1}{operator}{input2}</p>
                    <p>{answer}</p></div>
                <div className="calc-row">
                    <button onClick={clearDisplay}className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button onClick={setOperator}className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={setInputs}className="calc-button">7</button>
                    <button onClick={setInputs}className="calc-button">8</button>
                    <button onClick={setInputs}className="calc-button">9</button>
                    <button onClick={setOperator}className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={setInputs}className="calc-button">4</button>
                    <button onClick={setInputs}className="calc-button">5</button>
                    <button onClick={setInputs}className="calc-button">6</button>
                    <button onClick={setOperator}className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={setInputs}className="calc-button">1</button>
                    <button onClick={setInputs}className="calc-button">2</button>
                    <button onClick={setInputs}className="calc-button">3</button>
                    <button onClick={setOperator}className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={setInputs}className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button onClick={this.eval}className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator