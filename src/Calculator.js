import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    constructor(props) {
        super (props)
        this.state = {
            operator: [],
            input1: [],
            input2: [],
            answer: []
        }
    }
    setInputs = (e) =>{
        if(this.state.answer.length > 0){
            this.clearDisplay()
        } else {
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
    }
    clearDisplay = (e) =>{
        this.setState({
            operator: [],
            input1: [],
            input2: [],
            answer: []
        })
    }
    setOperator = (e) =>{
        this.setState({
            operator: e.target.innerText
        })
        console.log(this.state.operator)
    }

    addDecimal = (e)=> {
        let lastIndex1 = (this.state.input1.length -1)
        let lastIndex2 = (this.state.input2.length -1)
        if(this.state.input1.length > 0 && Number.isInteger(parseFloat(this.state.input1.join(''))) && this.state.operator.length === 0 && this.state.input1[lastIndex1] !== '.'){
            let decimal = e.target.innerText
            this.setState({
                    input1: [...this.state.input1, decimal]
            })
        } else if (this.state.input2.length > 0 && Number.isInteger(parseFloat(this.state.input2.join(''))) && this.state.operator.length > 0 && this.state.input2[lastIndex2] !== '.'){
            let decimal = e.target.innerText
            this.setState({
                    input2: [...this.state.input2, decimal]
            })
        }
    }

    addZero = (e) =>{
        if((parseInt(this.state.input1[0]) > 0 || this.state.input1.length ===0 || this.state.input1[1] === '.') && this.state.operator.length === 0 ){
            let zero = e.target.innerText
            this.setState({
                    input1: [...this.state.input1, zero]
            })
        } else if ((parseInt(this.state.input2[0]) > 0 || this.state.input2.length ===0 || this.state.input2[1] === '.') && this.state.operator.length > 0 ){
            let zero = e.target.innerText
            this.setState({
                    input2: [...this.state.input2, zero]
            })
        }
    }

    runMath = () =>{
        let num1 = parseFloat(this.state.input1.join(''))
        let num2 = parseFloat(this.state.input2.join(''))
        if(this.state.operator === '+'){
            this.setState({
                answer: [(num1 + num2)]
            })
        } else if(this.state.operator === '-'){
            this.setState({
                answer: [(num1 - num2)]
            })
        } else if(this.state.operator === 'x'){
            this.setState({
                answer: [(num1 * num2)]
            })
        } else if(this.state.operator === '/' && num2 === 0){
            this.setState({
                answer: ["Error cannot divide by 0"]
            })
        }else if(this.state.operator === '/'){
            this.setState({
                answer: [(num1 / num2)]
            })
        }
    }
render(){
    // let num1 = this.state.input1.length > 0 && Number.isInteger(parseFloat(this.state.input1.join('')))
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">
                    <p>{this.state.input1}{this.state.operator}{this.state.input2}</p>
                    <p>{this.state.answer}</p>
                </div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={this.clearDisplay}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick={this.setOperator}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.setInputs}>7</button>
                    <button className="calc-button" onClick={this.setInputs}>8</button>
                    <button className="calc-button" onClick={this.setInputs}>9</button>
                    <button className="calc-button calc-button-op" onClick={this.setOperator}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.setInputs}>4</button>
                    <button className="calc-button" onClick={this.setInputs}>5</button>
                    <button className="calc-button" onClick={this.setInputs}>6</button>
                    <button className="calc-button calc-button-op" onClick={this.setOperator}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.setInputs}>1</button>
                    <button className="calc-button" onClick={this.setInputs}>2</button>
                    <button className="calc-button" onClick={this.setInputs}>3</button>
                    <button className="calc-button calc-button-op" onClick={this.setOperator}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={this.addZero}>0</button>
                    <button className="calc-button" onClick={this.addDecimal}>.</button>
                    <button className="calc-button calc-button-op" onClick={this.runMath}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator