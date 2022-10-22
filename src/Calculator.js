import React, { Component } from 'react'

class Calculator extends Component {
    state = {
        input: '',
        operator: '',
        total: '',
        prevInput: ''
    }


    setNum = (e) => {
        // so user cannot type more than once decimal point
        if (this.state.input.includes('.') && e.target.innerText === '.') return
        // return input to 0 after total
        if (this.state.total) {
            this.setState(() => {
                return {
                    input: ''
                }
            })
        }
        // set numbers
        this.setState({
            input: this.state.input.concat(e.target.innerText)
        })

    }

    // clear screen when AC button clicked
    allClear = (e) => {
        this.setState({
            input: '',
            prevInput: ''
        })
    }       
    
    calculate = (e) => {
        this.setState({
            operator: e.target.innerText
        })
        // store prevInput
        this.setState(
            prevState => {
                return{
                    prevInput: prevState.input
                }
        })
        this.setState({
            input: ''
        })
    }

    equals = (e) => {
        if (this.state.operator === '+'){
            let answer = (Number(this.state.prevInput) + Number(this.state.input)).toString()
            this.setState({
                input: answer
            })
        } else if (this.state.operator === '-'){
            let answer = (Number(this.state.prevInput) - Number(this.state.input)).toString()
            this.setState({
                input: answer
            })
        } else if (this.state.operator === 'x'){
            let answer = (Number(this.state.prevInput) * Number(this.state.input)).toString()
            this.setState({
                input: answer
            })
        } else if (this.state.operator === '/'){
            let answer = (Number(this.state.prevInput) / Number(this.state.input)).toString()
            this.setState({
                input: answer
            })
        } else if (this.state.operator === '%'){
            let answer = (Number(this.state.prevInput) % Number(this.state.input)).toString()
            this.setState({
                input: answer
            })
        } 
    }

render(){

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.input ? this.state.input : this.state.prevInput}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={(e) => this.allClear(e)}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top" onClick={ (e) => this.calculate(e)}>%</button>
                    <button className="calc-button calc-button-op" onClick={ (e) => this.calculate(e)}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => this.setNum(e)}>7</button>
                    <button className="calc-button" onClick={(e) => this.setNum(e)}>8</button>
                    <button className="calc-button" onClick={(e) => this.setNum(e)}>9</button>
                    <button className="calc-button calc-button-op" onClick={ (e) => this.calculate(e)}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => this.setNum(e)}>4</button>
                    <button className="calc-button" onClick={(e) => this.setNum(e)}>5</button>
                    <button className="calc-button" onClick={(e) => this.setNum(e)}>6</button>
                    <button className="calc-button calc-button-op" onClick={ (e) => this.calculate(e)}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => this.setNum(e)}>1</button>
                    <button className="calc-button" onClick={(e) => this.setNum(e)}>2</button>
                    <button className="calc-button" onClick={(e) => this.setNum(e)}>3</button>
                    <button className="calc-button calc-button-op" onClick={ (e) => this.calculate(e)}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={(e) => this.setNum(e)}>0</button>
                    <button className="calc-button" onClick={(e) => this.setNum(e)}>.</button>
                    <button className="calc-button calc-button-op" onClick={(e) => this.equals(e)}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator