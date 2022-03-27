import React, { Component } from 'react'
import EquationBox from './EquationBox'
import CurrentValue from './CurrentValue'

class Calculator extends Component {
    // Declare state variables
    constructor(){
        super()

        this.state = {
            value : 'value',
            equation: ''
        }
        
    }

    addChar = (char) =>{
        console.log('ADDCHAR IS BEING CALLED, GOOD START!')
        this.setState(prevState =>{
            return {equation : prevState.equation+char}
        })
    }

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <CurrentValue value = {this.state.value}/>
                <EquationBox equation = {this.state.equation}/>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" >AC</button>
                    <button className="calc-button calc-button-top" >+/-</button>
                    <button className="calc-button calc-button-top" onClick={()=>this.addChar('%')}>%</button>
                    <button className="calc-button calc-button-op" onClick={()=>this.addChar('/')}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={()=>this.addChar(7)}>7</button>
                    <button className="calc-button" onClick={()=>this.addChar(8)}>8</button>
                    <button className="calc-button" onClick={()=>this.addChar(9)}>9</button>
                    <button className="calc-button calc-button-op" onClick={()=>this.addChar('x')}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={()=>this.addChar(4)}>4</button>
                    <button className="calc-button" onClick={()=>this.addChar(5)}>5</button>
                    <button className="calc-button" onClick={()=>this.addChar(6)}>6</button>
                    <button className="calc-button calc-button-op" onClick={()=>this.addChar('-')}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={()=>this.addChar(1)}>1</button>
                    <button className="calc-button" onClick={()=>this.addChar(2)}>2</button>
                    <button className="calc-button" onClick={()=>this.addChar(3)}>3</button>
                    <button className="calc-button calc-button-op" onClick={()=>this.addChar('+')}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={()=>this.addChar(0)}>0</button>
                    <button className="calc-button" onClick={()=>this.addChar('.')}>.</button>
                    <button className="calc-button calc-button-op" >=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator