import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables

    state = {
        num1: '',
        num2: '',
        result: '',
        operator: '',
        numDisplay: ''
    }

    handleNum = (e) => {
        //////// 
        // if the current num1 is '' and operator is '' only add to num1
        // if operator is clicked only add to num2

        const currButton = e.target.innerText

        if(!(this.state.num1 === '' && currButton === '0') && this.state.operator === ''){
            // handling double decimal
            if (this.state.num1.includes('.') && currButton === '.'){
                console.log('error!')
            } else {
                // setting num1
                this.setState((prevstate)=>{
                    return {
                        num1: prevstate.num1 + currButton,
                        numDisplay: prevstate.num1 + currButton,
                    }
                })
            }
        }
        if(!(this.state.num2 === '' && this.state.operator === '')){
            //handling double decimal
            if (this.state.num2.includes('.') && currButton === '.'){
                console.log('error!')
            } else {
                // setting num2
                this.setState((prevstate) => {
                    return {
                        num2: prevstate.num2 + currButton,
                        numDisplay: prevstate.num2 + currButton
                    }
                })
            }
        }
        console.log('num1', this.state.num1)
        console.log('num2', this.state.num2)
    }

    handleOperator = (e) => {
        const operator = e.target.innerText
        if (!(this.state.num1 === '') && this.state.num2 === ''){
            this.setState(() => {
                return {operator: operator}
            })
        }
        console.log(operator)
    }

    handleCalc = () => {
        // if equals is clicked parse integers and complete operation 
        if(!(this.state.num1 === '' && this.state.num2 === '')){
            console.log('doodley doo')

        }
        switch (!(this.state.num1 === '' && this.state.num2 === '')) {
            case this.state.operator === '+':
                this.setState(() => {
                    return {result: Number(this.state.num1) + Number(this.state.num2) }
                })
                break
            case this.state.operator === '-':
                this.setState(() => {
                    return {result: Number(this.state.num1) - Number(this.state.num2) }
                })
                break
            case this.state.operator === '/':
                this.setState(() => {
                    return {result: Number(this.state.num1) / Number(this.state.num2) }
                })
                break
            case this.state.operator === 'x':
                this.setState(() => {
                    return {result: Number(this.state.num1) * Number(this.state.num2) }
                })
                break
            case this.state.operator === '/':
                this.setState(() => {
                    return {result: Number(this.state.num1) / Number(this.state.num2) }
                })
                break
        }

    }
    handleClear = () => {
        this.setState(() => {
            return {
                num1: '',
                num2: '',
                numDisplay: '',
                result: ''
            }
        })
    }

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: {this.state.numDisplay} </p>
                <div className="answer-box">{this.state.result}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={this.handleClear}>AC</button>
                    <button className="calc-button calc-button-top" onClick={this.handleOperator}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={this.handleOperator}>%</button>
                    <button className="calc-button calc-button-op" onClick={this.handleOperator}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.handleNum}>7</button>
                    <button className="calc-button" onClick={this.handleNum}>8</button>
                    <button className="calc-button" onClick={this.handleNum}>9</button>
                    <button className="calc-button calc-button-op" onClick={this.handleOperator}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.handleNum}>4</button>
                    <button className="calc-button" onClick={this.handleNum}>5</button>
                    <button className="calc-button" onClick={this.handleNum}>6</button>
                    <button className="calc-button calc-button-op" onClick={this.handleOperator}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.handleNum}>1</button>
                    <button className="calc-button" onClick={this.handleNum}>2</button>
                    <button className="calc-button" onClick={this.handleNum}>3</button>
                    <button className="calc-button calc-button-op" onClick={this.handleOperator}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={this.handleNum}>0</button>
                    <button className="calc-button" onClick={this.handleNum}>.</button>
                    <button className="calc-button calc-button-op" onClick={this.handleCalc}>=</button>
                </div>
            </div>
        </div>
    )
}
}
        //  if (this.state.num1 === '' && currButton !== '0'){
        //     this.setState((prevstate)=> {
        //         console.log('bagel')
        //         return {num1: prevstate.num1 + currButton} 
        //     }) 
        // }else if (this.state.num1 !== ''){
        //     console.log('mayo')
        //     this.setState((prevstate) => {
        //         return {num1: prevstate.num1 + currButton, numDisplay: prevstate.num1 + currButton}
        //     })
        // }
        // console.log("this is num1", this.state.num1)

export default Calculator