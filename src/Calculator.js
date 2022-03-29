import React, { Component } from 'react'
import Values from './Values'
class Calculator extends Component {
    // Declare state variables
    constructor(props) {
        super(props)
        this.state = {
            values: [],
         }
    }
    addNumToValues = (e) => {
        console.log(this.state.values.length)
        let number = e.target.innerText
        if (number === 'x'){
            number = '*'
        }
       for (let i = 0; i < this.state.values.length; i++){
           if (this.state.values[i] === '.' && this.state.values[i+1] === '.'){
               this.state.values.pop()

       }
    }
        if (number === '.' && this.state.values.length === 0){
            number = '0.'
               
        }
        else {
            number = e.target.innerText
        }
        this.setState ({ 
            values: [
               ...this.state.values,
                number
            ]       
    })
}
    compute = () => {
        let convert = this.state.values.join("")
        this.setState({
            values: eval(convert)
    })
}
    clearCalc = () => {
        this.setState({
            values: []
        })
    }
render(){
    console.log('this is the value of values array ', this.state.values)
     return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <Values 
                values={this.state.values}
                NegPos={this.NegOrPosNumber} 
                /> 
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button onClick = {this.clearCalc} className="calc-button calc-button-top">AC</button>
                    <button onClick = {this.NegOrPosNumber} className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button onClick = { (e) => this.addNumToValues(e)} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick = { (e) => this.addNumToValues(e)} className="calc-button">7</button>
                    <button onClick = { (e) => this.addNumToValues(e)} className="calc-button">8</button>
                    <button onClick = { (e) => this.addNumToValues(e)} className="calc-button">9</button>
                    <button onClick = { (e) => this.addNumToValues(e)} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick = { (e) => this.addNumToValues(e)} className="calc-button">4</button>
                    <button onClick = { (e) => this.addNumToValues(e)} className="calc-button">5</button>
                    <button onClick = { (e) => this.addNumToValues(e)} className="calc-button">6</button>
                    <button onClick = { (e) => this.addNumToValues(e)} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick = { (e) => this.addNumToValues(e)} className="calc-button">1</button>
                    <button onClick = { (e) => this.addNumToValues(e)} className="calc-button">2</button>
                    <button onClick = { (e) => this.addNumToValues(e)} className="calc-button">3</button>
                    <button onClick = { (e) => this.addNumToValues(e)} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick = { (e) => this.addNumToValues(e)} className="calc-button width-2">0</button>
                    <button onClick = { (e) => this.addNumToValues(e)} className="calc-button">.</button>
                    <button onClick = {this.compute} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    ) 
}
}

export default Calculator